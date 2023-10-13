import Services from "../components/Services/Services.jsx";
import axios from "axios";
import {json, Outlet, useLoaderData, useRouteLoaderData} from "react-router-dom";

export const ServicesPage = () => {
    const services = useRouteLoaderData('root');

    return <>

        <Services services={services}/>
        <Outlet/>
    </>
}

// eslint-disable-next-line react-refresh/only-export-components
