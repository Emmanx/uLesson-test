import { ISubjectsRes } from '../types';
import instance from './axios.config';

export const fetchSubjects: () => Promise<ISubjectsRes> = async () => {
  const { data } = await instance.get('/content/grade');
  return data.data;
};
