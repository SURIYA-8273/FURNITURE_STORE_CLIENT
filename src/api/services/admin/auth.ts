import axios from "@/api/axios";
import API_ENDPOINTS from "@/api/endpoints";

interface adminLoginInterface{
    email:string,
    password:string
}

export const adminLogin = async ({email,password}:adminLoginInterface) => {
  const response = await axios.post(API_ENDPOINTS.ADMIN.LOGIN,{email,password},{
  withCredentials: true,
});
  return response;
};
