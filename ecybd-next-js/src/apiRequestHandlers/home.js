import api from "@/axios/axiosInstance";

export const getHomeBannerSlider = async () => {
  const res = await api.get("/home/slide/");
  return res.data;
};

export const getVissionSlider = async () => {
  const res = await api.get("/home/sliderimage/");
  return res.data;
};

export const getVerses = async () => {
  const res = await api.get("/home/get_active_verses/");
  return res.data;
};
