import api from "@/axios/axiosInstance";

export const getPublications = async (
  pageNumber = 0,
  limit = 6,
  publicationType = "Jubodrishty"
) => {
  const res = await api.get(
    `/publication/?offset=${pageNumber}&limit=${limit}&ordering=upload_date&publication_type=${publicationType}`
  );

  return res.data;
};
