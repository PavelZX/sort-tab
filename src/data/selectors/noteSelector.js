import { createSelector } from 'reselect';


export const flagSelector = (selector, name) => createSelector(
    selector,
    (map) => map.get(name)
);



const noteStateSlice = (state) => state.noteStore;

/*----- Имя пользователя для шапки сайта ------*/
const isLoadingSelector = flagSelector(noteStateSlice, 'isLoading');
const vkItemsSelector  = flagSelector(noteStateSlice, 'vkItems');


// todo важно соблюдать порядок при перечислении
export const getNoteData = createSelector(
    isLoadingSelector,
    vkItemsSelector,
    (isLoading,
     vkItems) => ({
        isLoading,
        vkItems,
    })
);