import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import ProductList from './components/ProductList/ProductList';
import { HashRouter, Route, Switch, BrowserRouter } from 'react-router-dom';
import routes from './routes';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Menu />

                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {this.showContent(routes)}
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }

    showContent = routes => {
        var result = null;

        if(routes.length > 0){
            result = routes.map((route, index) => {
                return (
                    <Route key={index}
                           path={route.path}
                           exact={route.exact}
                           component={route.main}       
                    />
                );
            })
        }

        return <Switch>{result}</Switch>;
    }
}

export default App;