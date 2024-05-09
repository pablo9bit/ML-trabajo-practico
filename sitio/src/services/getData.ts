import clienteAxios from "../config/axios";

export const getList = async (searchParam: string) => {
  if (searchParam) {
    try {
      const {data} = await clienteAxios.get(`/api/items/?q=${searchParam}`);
      console.log(data);
      return data;
    } catch (error) {
      /* empty */
    }
  }
};

export const getDetail = async (id: string) => {
  if (id) {
    try {
      const { data } = await clienteAxios.get(`/api/items/${id}`);
      return data;
    } catch (error) {
      /* empty */
    }
  }
};
