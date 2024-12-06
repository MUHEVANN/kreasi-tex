import axios from "axios";

const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api/`,
    headers: { accept: "application/json" },
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => {
        if (response.status === 401) {
            localStorage.removeItem("token");
            window.location.href = "/login";
        }
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const get = (url: string) => api.get(url);

export const post = (url: string, data: any = null, config: object = {}) =>
    api.post(url, data, config);

export const put = (url: string, data: any = null, config: object = {}) =>
    api.put(url, data, config);

export const del = (url: string) => api.delete(url);
