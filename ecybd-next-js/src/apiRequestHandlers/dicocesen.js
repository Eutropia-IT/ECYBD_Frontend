import api from "@/axios/axiosInstance";

export const getDhaka = async () => {
  const response = await api.get("/home/dicocesen/1/");
  return response.data;
};

export const getChittagong = async () => {
  const response = await api.get("/home/dicocesen/2/");
  return response.data;
};

export const getDinajpur = async () => {
  const response = await api.get("/home/dicocesen/3/");
  return response.data;
};

export const getKhulna = async () => {
  const response = await api.get("/home/dicocesen/4/");
  return response.data;
};

export const getMymensingh = async () => {
  const response = await api.get("/home/dicocesen/5/");
  return response.data;
};

export const getRajshahi = async () => {
  const response = await api.get("/home/dicocesen/6/");
  return response.data;
};

export const getSylhet = async () => {
  const response = await api.get("/home/dicocesen/7/");
  return response.data;
};

export const getBarishal = async () => {
  const response = await api.get("/home/dicocesen/8/");
  return response.data;
};
