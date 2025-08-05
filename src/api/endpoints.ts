const API_ENDPOINTS = {

    ADMIN:{
        LOGIN:"/auth/login",
    },
    CATEGORY:{
        GET_ALL:"/categories",
        CREATE:"/admin/categories",
        DELETE:(id:string | number)=>`/admin/categories/${id}`,
        UPDATE:(id:string | number)=>`/admin/categories/${id}`,
    },
    SUB_CATEGORY:{
        GET_ALL:"/sub-categories",
        CREATE:"/admin/sub-categories",
        DELETE:(id:string | number)=>`/admin/sub-categories/${id}`,
        UPDATE:(id:string | number)=>`/admin/sub-categories/${id}`,
    },
     BANNER:{
        GET_ALL:"/banners",
        CREATE:"/admin/banners",
        DELETE:(id:string | number)=>`/admin/banners/${id}`,
        UPDATE:(id:string | number)=>`/admin/banners/${id}`,
    },
};

export default API_ENDPOINTS;