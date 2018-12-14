import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import { Link } from 'react-router-dom';
import callApi from './../../utils/api';
import { actFetchProducts, actDeleteProductRequest } from './../../actions/index';
import { connect } from 'react-redux';
import ProductItem from '../../components/ProductItem/ProductItem';

class Products extends Component {

    componentDidMount() {

        const { onFetchProducts } = this.props;

        callApi('products', 'GET', null).then(res => {
            onFetchProducts(res.data);
        });
    }

    render() {

        const { products } = this.props;

        return (
            <div>
                <div className="d-flex flex-row mt-3 mb-4">
                    <Link to='/product/add' className="mr-auto btn btn-success">Thêm sản phẩm</Link>
                    <form>
                        <div className="form-row align-items-center">
                            <div className="col-auto">
                                <input type="text" className="form-control mb-2" />
                            </div>

                            <div className="col-auto">
                                <button type="submit" className="btn btn-primary mb-2">Tìm kiếm</button>
                            </div>
                        </div>
                    </form>
                </div>
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>
            </div>
        );
    }

    onDelete = id => {
        this.props.onDeleteProduct(id);
    }

    showProducts = (products) => {
        var result = null;

        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem key={index} product={product} index={index} onDelete={this.onDelete} />
                )
            })
        }

        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchProducts: products => {
            dispatch(actFetchProducts(products));
        },
        onDeleteProduct: id => {
            dispatch(actDeleteProductRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);