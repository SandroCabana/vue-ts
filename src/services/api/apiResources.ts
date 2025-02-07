import axios, {type AxiosRequestConfig,type AxiosResponse } from 'axios';


export const apiRoot = 'api';

export default class ApiResource {
    static async fetch<T>(method: 'GET' | 'POST' | 'PUT' | 'DELETE', url: string, body: any = null, conf: AxiosRequestConfig = {}): Promise<T> {
        const config: AxiosRequestConfig = {
            ...conf,
            responseType: conf.responseType ?? 'json',
            headers: {
                "Content-Type": "application/json",
                ...conf.headers
            }
        };

        const accessToken = localStorage.getItem('token');

        if (accessToken) {
            config.headers = {
                ...config.headers,
                "Authorization": `Bearer ${accessToken}`
            };
        }

        try {
            let res: AxiosResponse<T>;

            switch (method.toUpperCase()) {
                case 'POST':
                    res = await axios.post<T>(`${apiRoot}/${url}`, body, config);
                    break;
                case 'GET':
                    res = await axios.get<T>(`${apiRoot}/${url}`, config);
                    break;
                case 'PUT':
                    res = await axios.put<T>(`${apiRoot}/${url}`, body, config);
                    break;
                case 'DELETE':
                    res = await axios.delete<T>(`${apiRoot}/${url}`, config);
                    break;
                default:
                    throw new Error(`Método HTTP no soportado: ${method}`);
            }

            return res.data;
        } catch (err) {
            throw err;
        }
    }
}
