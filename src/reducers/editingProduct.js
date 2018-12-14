import * as Types from './../constants/ActionTypes';

const editingInitialState = {};

const editingProductReducer = (state = editingInitialState, action) => {
    switch (action.type) {

        case Types.EDIT_PRODUCT:
            return action.payload;

        default:
            return {...state};
    }
}

export default editingProductReducer;