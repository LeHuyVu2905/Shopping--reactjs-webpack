import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {
    render() {

        const { product, index } = this.props;
        const statusClass = product.status ? 'warning' : 'info';
        const statusProduct = product.status ? 'còn hàng' : 'hết hàng';

        return (
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`badge badge-${statusClass}`}>{statusProduct}</span>
                </td>
                <td>
                    <Link to={`/product/${product.id}/edit`} className="btn btn-primary mr-2">Sửa</Link>
                    <button onClick={() => this.onDelete(product.id)} type="button" className="btn btn-danger">Xóa</button>
                </td>
            </tr>
        );
    }

    onDelete = id => {
        if(confirm('Bạn có chắc muốn xóa sản phẩm này?')){  // eslint-disable-line
            this.props.onDelete(id);
        }
    }
}

export default ProductItem;