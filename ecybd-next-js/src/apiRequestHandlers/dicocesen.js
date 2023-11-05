import api from "@/axios/axiosInstance";

export const getDhaka = async () => {
  const response = await api.get("/home/dicocesen/1/");
  return response.data;
};
