import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosRequest = (urlRoute, params) => {
    const publicKey = "badd148cc7d5975dc382dfabd381d794";
    const baseUrl = "https://gateway.marvel.com/v1/public/";

    const [payload, setPayload] = useState(
        {
            loading: false,
            data: null,
            error: false
        }
    );

    const requestParams = {"apikey": publicKey, ...params}

    useEffect(() => {
        setPayload({
            loading: true,
            data: null,
            error: false
        });

        const axiosInstance = axios.create({
            baseURL: baseUrl,
            params: requestParams,
            timeout: 10000,
            method: 'get',
            responseType: 'json',
        });
        axiosInstance.get(urlRoute)
        .then(response => {
            console.log(response);
        setPayload({
            loading: false,
            data: response.data.data,
            error: false
        })
    })
    .catch(error => setPayload({
        loading: false,
        data: null,
        error: true
    }));

    }, [urlRoute]);

    return payload;
}

export default useAxiosRequest;