import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import About from "../../pages/Home/About/About";
import Blog from "../../pages/Home/Blog/Blog";
import Contact from "../../pages/Home/Contact/Contact";
import Home from "../../pages/Home/Home/Home";
import Projects from "../../pages/Home/Projects/Projects";
import ProjectDetails1 from "../../pages/ProjectDetails/ProjectDetails1";
import ProjectDetails2 from "../../pages/ProjectDetails/ProjectDetails2";
import ProjectDetails3 from "../../pages/ProjectDetails/ProjectDetails3";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/projects',
                element:<Projects></Projects>
            },
            {
              path:'/contact',
              element:<Contact></Contact>
            },
            {
                path:'/projectdetails1',
                element:<ProjectDetails1></ProjectDetails1>
            },
            {
                path:'/projectdetails2',
                element:<ProjectDetails2></ProjectDetails2>
            },
            {
                path:'/projectdetails3',
                element:<ProjectDetails3></ProjectDetails3>
            }
        ]
    }
])
export default router;