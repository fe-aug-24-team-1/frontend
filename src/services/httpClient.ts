import axios from 'axios';

export const getData = async <T>(url: string): Promise<T> => {
  const { data } = await axios.get<T>(url);

  if (!data) {
    throw new Error("Can't get data from the server");
  }

  return data;
};
