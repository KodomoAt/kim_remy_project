import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'
import Header from "./components/Header/Header.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import Services from "./components/Services/Services.jsx";
import About from "./components/About/About.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ReactDOM from "react-dom";
import {Contact} from "./components/Contact/Contact.jsx";
import {RootPage} from "./pages/RootPage.jsx";
import {HomePage} from "./pages/HomePage.jsx";
import {ServicesPage} from "./pages/ServicesPage.jsx";
import {AboutPage} from "./pages/AboutPage.jsx";

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootPage/>,
            id: 'root',
            children: [
                {index: true, element: <HomePage/>},
                {path: 'services', element: <ServicesPage/>},
                {path:'about', element: <AboutPage/>}
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
