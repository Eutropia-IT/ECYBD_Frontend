import api from "@/axios/axiosInstance";

export const getBlogs = async () => {
  const res = await api.get("/blog");
  return res.data;
};

export const getBlog = async (id) => {
  const res = await api.get(`/blog/${id}`);
  return res.data;
};
