import api from "@/axios/axiosInstance";

export const getBlogs = async (
  pageNumber = 0,
  limit = 10,
  search = "",
  month = "",
  year = ""
) => {
  const res = await api.get(
    `/blog/?offset=${pageNumber}&limit=${limit}&ordering=-publication_date&title=${search}&month=${month}&year=${year}`
  );
  return res.data;
};

export const getBlog = async (id) => {
  const res = await api.get(`/blog/${id}/`);
  return res.data;
};

export const getBlogFilters = async () => {
  const res = await api.get(`/filter_blog/`);
  return res.data;
};
