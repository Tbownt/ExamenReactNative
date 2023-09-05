import {useEffect, useState} from 'react';
import {User, UserDetail, UserStructure} from '../interfaces/userInterface';
import userApi from '../api/userApi';

export const useUsers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [usuarios, setUsuarios] = useState<User[]>([]);
  const [usuario, setUsuario] = useState<User>();
  const getUsers = async () => {
    const resp = await userApi.get<UserStructure>('/');
    const page2 = await userApi.get<UserStructure>('/?page=2');
    const data = resp.data.data;
    const data2 = page2.data.data;
    const totalUsers = data.concat(data2);
    setUsuarios(totalUsers);
    setIsLoading(false);
  };

  const getUserDetail = async (id: number) => {
    const resp = await userApi.get<UserDetail>(`/${id}`);
    const data = resp.data.data;
    setUsuario(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return {
    getUsers,
    usuarios,
    usuario,
    isLoading,
    getUserDetail,
  };
};
