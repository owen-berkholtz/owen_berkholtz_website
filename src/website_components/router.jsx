import { createBrowserRouter } from "react-router-dom";
import App from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Projects from '../pages/ProjectHub.jsx'

export const router = createBrowserRouter([

    {
        path: "/",
        element: <App/>,
    },

    {
        path: "/about",
        element: <About/>,
    },

    {
        path: "/projects",
        element: <Projects/>,
    },

])

