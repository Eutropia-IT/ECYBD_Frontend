import api from "@/axios/axiosInstance";

export const getSlider = async () => {
  const res = await api.get("/home/sliderimage");
  return res.data;
};

export const getVerses = async () => {
  const res = await api.get("/home/get_active_verses");
  return res.data;
};
