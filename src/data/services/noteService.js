import {Map} from 'immutable';

import {dispatchAsync, createBaseRequest} from "../helpers/requestHelper";
import {vkTestData} from "../const/vkTestData";

export const GET_VK_DATA_REQUEST = 'GET_VK_DATA_REQUEST';
export const GET_VK_DATA_SUCCESS = 'GET_VK_DATA_SUCCESS';
export const GET_VK_DATA_FAILURE = 'GET_VK_DATA_FAILURE';




export const noteActionCreators = {

    getAsyncData(params) {
        // todo условный вид асинхронного запроса
        // todo здесь нужно описать promise, у которого будет 3 состояния: request, success, failure
        // todo так можно будет контролировать асинхронные запросы. промис сконфигурировать надо самому
        // todo также в промисах можно будет обработать код ошибки, и выбрасывать в состояние failure
        return (dispatch) => {
            dispatchAsync(createBaseRequest(params), dispatch, {
                request: GET_VK_DATA_REQUEST,
                success: GET_VK_DATA_SUCCESS,
                failure: GET_VK_DATA_FAILURE
            }, {params})
        }
    }


};

// todo пример начального состояния
const initialState = Map({
    isLoading: false,
    vkItems: [],
    vkData: vkTestData
});

export const noteStore = (state = initialState, action) => {
    switch (action.type) {
        case GET_VK_DATA_REQUEST:
            return state
                .set('isLoading', true)
                .set('vkItems', []);

        case GET_VK_DATA_SUCCESS:
            const newvkItems = action.payload && action.payload.data && action.payload.data.length > 0 ? action.payload.data : [];
            return state
                .set('isLoading', false)
                .set('vkItems', vkTestData);

        case GET_VK_DATA_FAILURE:
            return state
                .set('isLoading', false)
                .set('vkItems', []);

        default:
            return state
    }
};
