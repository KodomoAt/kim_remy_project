import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'
import {RootPage} from "./pages/RootPage.jsx";
import {HomePage} from "./pages/HomePage.jsx";
import {ServicesPage} from "./pages/ServicesPage.jsx";
import {AboutPage} from "./pages/AboutPage.jsx";
import {loader as loaderServices} from "./pages/RootPage.jsx";
import {ServicePage} from "./pages/ServicePage.jsx";
import {RootServices} from "./pages/RootServices.jsx";
import {ContactPage} from "./pages/ContactPage.jsx";

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootPage/>,
            id: 'root',
            loader: loaderServices,
            children: [
                {index: true, element: <HomePage/>},
                {
                    path: 'services', element: <RootServices/>, children: [
                        {index: true, element: <ServicesPage/>},
                        {path: ':id', id: 'service-detail', element: <ServicePage/>}
                    ]
                },


                {path: 'about', element: <AboutPage/>},
                {path: 'contact', element: <ContactPage/>}
            ]
        }
    ]);


    return (
        <>

            <RouterProvider router={router}/>

        </>
    )
}

export default App
