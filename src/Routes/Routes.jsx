import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactPage from "../Pages/ContactPage/ContactPage";
import Blog from "../Pages/Blog/Blog";
import Services from "../Pages/Services/Services";
import TestimonialPages from "../Pages/Testimonial/TestimonialPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contactUs",
        element: <ContactPage></ContactPage>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      
      {
        path: "/services",
        element: <Services></Services>
      },
      {
        path: "/testimonial",
        element: <TestimonialPages></TestimonialPages>
      },
    ],
  },
]);

export default router;
