import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPAge/LoginPage";
import AdminPage from "./pages/AdminPAge/AdminPage";

const router = createBrowserRouter([
  {
    path:'/',
    element:<HomePage/>
  },
  {
    path:'/login',
    element:<LoginPage/>
  },
  {
    path:"/admin",
    element:<AdminPage/>
  }
])
function App() {
 

  return (
    <RouterProvider router={router} />
  )
}

export default App
