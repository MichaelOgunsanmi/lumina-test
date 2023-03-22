export interface UserDTO {
  id: number;
  firstName: string;
  lastName: string;
}

export interface UsersDTO {
  data: UserDTO[];
}

export interface User {
  id: number;
  name: string;
}
