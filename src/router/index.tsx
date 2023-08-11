// { lazy } 
import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
const withLoadingComponent = (comp:JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>
)
const Homes = lazy(() => import("../page/homes/homes"))
const Work = lazy(() => import("../page/work/Work"))

import Login from "../page/login/login";
import Home from "../page/home/Home";
const routers = [
    {
        path: "/login",
        element: withLoadingComponent(<Login />)
    },
    {
        path: "/",
        element: <Navigate to="/login" />
    },
    {
        path: "/home",
        element: withLoadingComponent(<Home />)
    },
    {
        path: "/homes",
        element: withLoadingComponent(<Homes />),
        children: [
            {
                path: "work",
                element: withLoadingComponent(<Work />),
            }
        ]
    },
]
export default routers;