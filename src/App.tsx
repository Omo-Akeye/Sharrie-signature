
import AppLayout from "./AppLayout"
import Homepage from "./pages/Homepage"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Productdetails from "./pages/Productdetails"

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      // errorElement: <PageNotFound/>,
      children:[
        {
          path: '/',
          element: <Homepage/>
       }, {
        path:'/product/:name',
        element:<Productdetails/>
     } ]}
      ])
  

  return (
   <div>
   <RouterProvider router={router}/>

   </div>
  )
}

export default App
