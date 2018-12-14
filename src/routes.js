import React from 'react';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Products from './pages/Products/Products';
import ActionProduct from './pages/ActionProduct/ActionProduct';

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <Home />
    },
    {
        path: "/product-list",
        exact: false,
        main: () => <Products />
    },
    {
        path: "/product/add",
        exact: false,
        main: ({history}) => <ActionProduct history={history} />
    },
    {
        path: "/product/:id/edit",
        exact: false,
        main: ({history, match}) => <ActionProduct history={history} match={match} />
    },
    {
        path: "",
        exact: false,
        main: () => <NotFound />
    }
];

export default routes;