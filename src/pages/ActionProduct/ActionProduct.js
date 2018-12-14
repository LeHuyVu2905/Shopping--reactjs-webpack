import React, { Component } from 'react';
import { actAddProductRequest, actgetEditProductRequest, actgetUpdateProductRequest } from './../../actions/index';
import { connect } from 'react-redux';

class ActionProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chbkStatus: false
        }
    }
    
    render() {

        const { txtName, txtPrice, chbkStatus } = this.state;
        
        return (
            <div className="mt-3 col-6">
                <h1>Thông tin sản phẩm</h1>
                <form onSubmit={(e) => this.onSave(e)} >
                    <div className="form-group">
                        <label htmlFor="productName">Tên sản phẩm</label>
                        <input onChange={(e) => this.onChange(e)} value={txtName} name="txtName" type="text" className="form-control" id="productName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productPrice">Giá</label>
                        <input onChange={(e) => this.onChange(e)} value={txtPrice} name="txtPrice" type="number" className="form-control" id="productPrice" />
                    </div>
                    <div className="form-check">
                        <input onChange={(e) => this.onChange(e)} checked={chbkStatus} name="chbkStatus" type="checkbox" className="form-check-input" id="chbkStatus" />
                        <label className="form-check-label" htmlFor="chbkStatus">Còn hàng</label>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Xác nhận</button>
                </form>
            </div>
        );
    }

    componentDidMount() {
        const { match } = this.props;

        if(match){
            const id = match.params.id;

            this.props.onGetEditProduct(id);
        }
    }
    
    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.editingProduct){

            const { editingProduct } = nextProps;

            this.setState({
                id: editingProduct.id,
                txtName: editingProduct.name,
                txtPrice: editingProduct.price,
                chbkStatus: editingProduct.status
            });
        }
    }
    

    onChange = e => {

        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    onSave = e => {
        e.preventDefault();

        const { id, txtName, txtPrice, chbkStatus } = this.state;
        const { history } = this.props;

        const product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: chbkStatus
        }

        if(id){
            this.props.onUpdateProduct(product);
            history.goBack();
        }
        else{
            this.props.onAddProduct(product);
        history.goBack();
        }
    }
}

const mapStateToProps = (state) => {
    return {
        editingProduct: state.editingProduct
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product));
        }, 
        onGetEditProduct: id => {
            dispatch(actgetEditProductRequest(id))
        },
        onUpdateProduct: product => {
            dispatch(actgetUpdateProductRequest(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionProduct);