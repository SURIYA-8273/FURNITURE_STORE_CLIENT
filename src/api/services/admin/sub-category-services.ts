import axios from "@/api/axios";
import API_ENDPOINTS from "@/api/endpoints";


export const createSubCategory = async (formData:FormData) => {
  const response = await axios.post(API_ENDPOINTS.SUB_CATEGORY.CREATE,formData,{withCredentials:true});
  return response;
};

export const updateSubCategory = async (formData:FormData,id:string | number) => {
  const response = await axios.put(API_ENDPOINTS.SUB_CATEGORY.UPDATE(id),formData,{withCredentials:true});
  return response;
};

export const fetchAllSubCategories = async () => {
  const response = await axios.get(API_ENDPOINTS.SUB_CATEGORY.GET_ALL);
  return response;
};

export const deleteSubCategory = async (id:string|number) => {
  const response = await axios.delete(API_ENDPOINTS.SUB_CATEGORY.DELETE(id),{withCredentials:true});
  return response;
};
