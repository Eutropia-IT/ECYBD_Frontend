import api from "@/axios/axiosInstance";

export const getGallery = async () => {
  const response = await api.get("/home/gallery/");
  return response.data;
};
