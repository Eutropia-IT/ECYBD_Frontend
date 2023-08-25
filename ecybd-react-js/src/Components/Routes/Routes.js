import About from "../About/About";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import ErrorPage from "../ErrorPage/ErrorPage";
import Gallery from "../Gallery/Gallery";
import Home from "../Home/Home";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Main/Main");

const router= createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'*',
                element:<ErrorPage></ErrorPage>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/about',
                element:<About></About>
            },
            ,
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/gallery',
                element:<Gallery></Gallery>
            }
            
        ]
    }
])
export default router;