
import AppLayout from "./AppLayout"
import Homepage from "./pages/Homepage"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Productdetails from "./pages/Productdetails"
import Cart from "./pages/Cart"
import ProductPage from "./pages/ProductPage"
import { useEffect } from "react"




function App() {
  useEffect(()=> {
    async function getCategory() {
      const response = await fetch('www.themealdb.com/api/json/v1/1/categories.php')
      const data =await response.json()
      console.log(data);
  }
  getCategory();
  },[])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      // errorElement: <PageNotFound/>,
      children:[
        {
          path: '/',
          element: <Homepage/>
       }, 
       {
        path:'/:name',
        element:<Productdetails/>
     },
      {
      path:'/cart',
      element:<Cart/>
   },{ path :'/product',
      element:<ProductPage/>}
     ]}
      ])
  

  return (
   <div>
   <RouterProvider router={router}/>
   

   </div>
  )
}

export default App
