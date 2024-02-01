import axios, { Axios, AxiosRequestConfig } from 'axios';

axios.defaults.withCredentials = true;

// 요청 인터셉터 추가
axios.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken!==null) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// 응답 인터셉터 추가
axios.interceptors.response.use((response) => {
    return response;
}, async (error) => {
    const originalRequest = error.config;
    // if (error.response.status === 401 && !originalRequest._retry) {
    //     originalRequest._retry = true;
    //     const refreshToken = localStorage.getItem('refreshToken');
    //     if(refreshToken) {
    //         try{
    //             // 리프레시 토큰을 사용하여 새 토큰 요청 API
    //             const tokenResponse = await axios.post('/api/주소', { refreshToken });
    //             const newAccessToken = tokenResponse.data.accessToken;
    //             localStorage.setItem('accessToken', newAccessToken);
    //             axios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
    //             originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
    //             return axios(originalRequest);
    //         }catch (refreshError) {
    //             console.error('Unable to refresh token', refreshError);
    //             return Promise.reject(refreshError);
    //         }
    //     }
    // }
    return Promise.reject(error);
})

interface AxiosType {
    url: string;
    method: 'get' | 'post' | 'put' | 'delete' | 'patch';
    body?: object;
    params?: object;
    log?: boolean;
}

const axiosWrap = async ({url,method, body, params, log}:AxiosType) => {
    try {
        const config: AxiosRequestConfig = {
            // baseURL: process.env.NEXT_PUBLICK_API_URL,
            baseURL: 'http://localhost:8080',
            params,
            withCredentials: true,
        };
        const response = 
            (method === "get" && (await axios.get(url, config))) ||
            (method === "post" && (await axios.post(url, body, config))) ||
            (method === "put" && (await axios.put(url,body,config)))||
            (method === "delete" && (await axios.delete(url, config)))||
            (method === "patch" && (await axios.patch(url,body,config))) ||
            { data: {}, headers: {}};
        return { data: response.data, headers: response.headers};;
    } catch(error){
        throw error;
    }
};

export const GET = (url: string, params?: {}) => axiosWrap({ url, method: "get", params });

export const POST = (url: string, body?: {}, params?: {}) => axiosWrap({ url, method: "post", body, params });

export const PUT = (url: string, body?: {}, params?: {}) => axiosWrap({ url, method: "put", body, params });

export const PATCH = (url: string, body?: {}, params?: {}) => axiosWrap({ url, method: "patch", body, params });

export const DELETE = (url: string) => axiosWrap({ url, method: "delete" });

export const LOG = (url: string, body?: {}, params?: {}) => axiosWrap({ url, method: "post", body, params, log: true });
