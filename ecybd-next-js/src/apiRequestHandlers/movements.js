import api from "@/axios/axiosInstance";

export const getBcsm = async () => {
  const response = await api.get("/home/movement/1/");
  return response.data;
};
export const getYcs = async () => {
  const response = await api.get("/home/movement/2/");
  return response.data;
};
export const getYouth = async () => {
  const response = await api.get("/home/movement/3/");
  return response.data;
};
