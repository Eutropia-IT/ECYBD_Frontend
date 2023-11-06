import api from "@/axios/axiosInstance";

export const getSEcretariat = async () => {
  const response = await api.get("/secretariat/");
  return response.data;
};
