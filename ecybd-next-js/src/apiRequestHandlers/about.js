import api from "@/axios/axiosInstance.js";

export const getTodo = async () => {
  const response = await api.get("/posts");
  return response.data;
};
