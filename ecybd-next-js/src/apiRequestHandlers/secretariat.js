import api from "@/axios/axiosInstance";

export const getSEcretariat = async () => {
  const response = await api.get("/secretariat/3/");
  return response.data;
};
