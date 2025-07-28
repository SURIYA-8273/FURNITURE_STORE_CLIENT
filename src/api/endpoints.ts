const API_ENDPOINTS = {

    PRODUCTS:{
        GET_BY_ID:(id : string | number)=>`/products/${id}`,
        GET_ALL:"/products"
    },
    ADMIN:{
        LOGIN:"/auth/login"
    }
};

export default API_ENDPOINTS;