import api from "@/axios/axiosInstance";

export const getVissionSlider = async () => {
  const res = await api.get("/home/sliderimage/");
  // const res = await api.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
};

export const getVerses = async () => {
  const res = await api.get("/home/get_active_verses/");
  return res.data;
};
