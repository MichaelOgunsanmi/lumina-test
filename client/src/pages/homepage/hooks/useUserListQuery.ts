import { User } from '../HomePage.types';
import { getAllUsers } from '../HomePage.requests';
import { useQuery } from '@tanstack/react-query';

export const useUserListQuery = () => {
  const userListQuery = async (): Promise<User[]> => {
    const axiosResponse = await getAllUsers();

    return axiosResponse.data.data.map(({ id, firstName, lastName }) => ({
      id,
      name: `${firstName} ${lastName}`
    }));
  };

  const users = useQuery({
    queryKey: ['users'],
    queryFn: userListQuery,
    staleTime: Infinity
  });

  const usersData = users.data ?? [];
  const isLoadingUsers = users.isLoading;
  const hasErrorLoadingUsers = users.isLoadingError;
  const hasSuccessLoadingUsers = users.isSuccess;

  return {
    usersData,
    isLoadingUsers,
    hasErrorLoadingUsers,
    hasSuccessLoadingUsers
  };
};
