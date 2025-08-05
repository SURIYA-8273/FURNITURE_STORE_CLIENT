import axios from "@/api/axios";
import API_ENDPOINTS from "@/api/endpoints";


export const createCategory = async (formData:FormData) => {
  const response = await axios.post(API_ENDPOINTS.CATEGORY.CREATE,formData,{withCredentials:true});
  return response;
};

export const updateCategory = async (formData:FormData,id:string | number) => {
  const response = await axios.put(API_ENDPOINTS.CATEGORY.UPDATE(id),formData,{withCredentials:true});
  return response;
};

export const fetchAllCategories = async () => {
  const response = await axios.get(API_ENDPOINTS.CATEGORY.GET_ALL);
  return response;
};

export const deleteCategory = async (id:string|number) => {
  const response = await axios.delete(API_ENDPOINTS.CATEGORY.DELETE(id),{withCredentials:true});
  return response;
};
