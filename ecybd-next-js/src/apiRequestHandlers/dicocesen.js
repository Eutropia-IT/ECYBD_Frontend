import api from "@/axios/axiosInstance";

export const getDhaka = async () => {
  const response = await api.get("/home/DIOCESAN/1/");
  return response.data;
};

export const getChittagong = async () => {
  const response = await api.get("/home/DIOCESAN/2/");
  return response.data;
};

export const getDinajpur = async () => {
  const response = await api.get("/home/DIOCESAN/3/");
  return response.data;
};

export const getKhulna = async () => {
  const response = await api.get("/home/DIOCESAN/4/");
  return response.data;
};

export const getMymensingh = async () => {
  const response = await api.get("/home/DIOCESAN/5/");
  return response.data;
};

export const getRajshahi = async () => {
  const response = await api.get("/home/DIOCESAN/6/");
  return response.data;
};

export const getSylhet = async () => {
  const response = await api.get("/home/DIOCESAN/7/");
  return response.data;
};

export const getBarishal = async () => {
  const response = await api.get("/home/DIOCESAN/8/");
  return response.data;
};
