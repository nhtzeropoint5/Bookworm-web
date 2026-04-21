import { createBrowserRouter } from "react-router";
import MainLayout from '../Layout/MainLayout.jsx';
import Books from '../pages/Books/Books.jsx';
import Homepage from '../pages/Homepage/Homepage.jsx';
import ErrorPage from '../pages/ErrorPage/ErrorPage.jsx'
import Details from "../components/Details/Details.jsx";

export const router = createBrowserRouter([
  {
   path: "/",
   Component: MainLayout,
   children: [
    {
      index: true,
      Component: Homepage,
    },
    {
      path: '/books',
     Component: Books,
    },
    {
      path: '/bookDetails/:id',
      Component: Details,
      loader: ()=> fetch('/booksData.json')
    }
   ],
   errorElement: <ErrorPage></ErrorPage>
  }
]);