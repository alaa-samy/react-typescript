import MainLayout from '@layouts/MainLayout/MainLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AboutUs from '@pages/AboutUs';
import Products from '@pages/Products';
import Categories from '@pages/Categories';
import Home from '@pages/Home';
import Login from '@pages/Login';
import Register from '@pages/Register';
import Error from '@pages/Error';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'about',
                element: <AboutUs />
            },
            {
                path: 'products/:prefix',
                element: <Products />,
                loader: ({ params}) => {
                    if(typeof params.prefix !== 'string' || !/^[a-z]+$/i.test(params.prefix)){
                        throw new Response("Bad request", {
                            statusText: 'Category not found'
                        })
                    }
                    return true
                }
            },
            {
                path: 'categories',
                element: <Categories />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },

        ]
    },
])

function AppRouter() {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter