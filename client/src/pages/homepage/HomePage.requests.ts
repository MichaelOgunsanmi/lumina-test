import { AxiosResponse } from 'axios';
import { UsersDTO } from './HomePage.types';
import { LocalServerInstance } from '../../api/axios-instance';

export const getAllUsers = (): Promise<AxiosResponse<UsersDTO>> =>
  LocalServerInstance.get<UsersDTO>('');
