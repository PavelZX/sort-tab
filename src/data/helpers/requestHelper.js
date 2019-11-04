import axios from 'axios';

export const Configuration = {
    API_URL: "" // todo vk api link
};

export const createBaseRequest = (config) => {
    const instance = axios.create({
        baseURL: Configuration.API_URL,
    });
    return instance.post('', () => {
        // todo здесь можно в методе сформировать пакет данных, что мы шлем в апи
    })
};


export function dispatchAsync(promise, dispatch, types, payload) {
    if (typeof dispatch !== 'function'){
        throw new Error('dispatch was not a function. Did you miss an update to the call?')
    }
    const { request, success, failure } = types;
    // диспатчим начало запроса
    dispatch({
        type: request,
        payload: payload
    });
    promise
        .then((response) => {
            /*... что-то происходит, диспатчим успех*/
            dispatch({
                type: success,
                success: true,
                payload: response.data,
                requestData: payload
            });
            return Promise.resolve();
        })
        .catch((error) => {
            /*... диспатчим ошибку запроса*/
            dispatch({
                type: failure,
                success: false,
                payload: {
                    data: {},
                    error: error.toString(),
                    errorCode: 1
                }
            });
            return Promise.reject(error);
        })
}