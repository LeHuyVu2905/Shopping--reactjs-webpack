import * as Types from './../constants/ActionTypes';

const findIndex = (state, id) => {
    var result = -1;

    if(state.length > 0){
        state.forEach((item, index) => {
            if(item.id === id){
                result = index;
            }
        });
    }

    return result;
}

const productsInitialState = [];

const productsReducer = (state = productsInitialState, action) => {

    var index = -1;

    switch (action.type) {

        case Types.FETCH_PRODUCTS:
            state = action.payload;
            return [...state];
        
        case Types.ADD_PRODUCT:
            state.push(action.payload);
            return [...state];

        case Types.DELETE_PRODUCT:
            index = findIndex(state, action.payload);
            state.splice(index, 1);
            return [...state];
        
        case Types.UPDATE_PRODUCT:
            index = findIndex(state, action.payload.id);
            state[index] = action.payload;
            return [...state];

        default:
            return [...state];
    }
}

export default productsReducer;