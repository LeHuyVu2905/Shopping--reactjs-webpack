import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import editingProductReducer from './editingProduct';

const appReducers = combineReducers({
    products: productsReducer,
    editingProduct: editingProductReducer
});

export default appReducers;