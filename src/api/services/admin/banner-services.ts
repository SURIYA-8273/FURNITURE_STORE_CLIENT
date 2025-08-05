import axios from "@/api/axios";
import API_ENDPOINTS from "@/api/endpoints";


export const createBanner = async (formData:FormData) => {
  const response = await axios.post(API_ENDPOINTS.BANNER.CREATE,formData,{withCredentials:true});
  return response;
};

export const updateBanner = async (formData:FormData,id:string | number) => {
  const response = await axios.put(API_ENDPOINTS.BANNER.UPDATE(id),formData,{withCredentials:true});
  return response;
};

export const fetchAllBanners = async () => {
  const response = await axios.get(API_ENDPOINTS.BANNER.GET_ALL);
  return response;
};

export const deleteBanner = async (id:string|number) => {
  const response = await axios.delete(API_ENDPOINTS.BANNER.DELETE(id),{withCredentials:true});
  return response;
};
