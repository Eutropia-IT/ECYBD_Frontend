import api from "@/axios/axiosInstance";

export const getBlogs = async (pageNumber = 0, limit = 1) => {
  console.log("pageNumber: ", pageNumber);

  const res = await api.get(
    `/blog/?offset=${pageNumber}&limit=${limit}&ordering=publication_date&title=&month=09&year=2023`
  );
  return res.data;
};

export const getBlog = async (id) => {
  const res = await api.get(`/blog/${id}/`);
  return res.data;
};
