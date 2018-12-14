import * as Types from './../constants/ActionTypes';
import callApi from './../utils/api';

export const actFetchProducts = products => {
    return {
        type: Types.FETCH_PRODUCTS,
        payload: products
    }
};

export const actAddProduct = product => {
    return {
        type: Types.ADD_PRODUCT,
        payload: product
    }
};

export const actAddProductRequest = product => {
    return dispatch => {
        return callApi('products', 'POST', product).then(res => dispatch(actAddProduct(res.data)));
    }
};

export const actDeleteProduct = id => {
    return {
        type: Types.DELETE_PRODUCT,
        payload: id
    }
};

export const actDeleteProductRequest = id => {
    return dispatch => {
        return callApi(`products/${id}`, 'DELETE', null).then(res => dispatch(actDeleteProduct(id)));
    }
};

export const actgetEditProduct = product => {
    return {
        type: Types.EDIT_PRODUCT,
        payload: product
    }
};

export const actgetEditProductRequest = id => {
    return dispatch => {
        return callApi(`products/${id}`, 'GET', null).then(res => dispatch(actgetEditProduct(res.data)));
    }
}

export const actgetUpdateProduct = product => {
    return {
        type: Types.UPDATE_PRODUCT,
        payload: product
    }
};

export const actgetUpdateProductRequest = product => {
    return dispatch => {
        return callApi(`products/${product.id}`, 'PUT', product).then(res => dispatch(actgetUpdateProduct(res.data)));
    }
}


