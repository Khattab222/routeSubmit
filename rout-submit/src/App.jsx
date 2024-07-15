
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DataContextProvider from './context/dataContext'
import { lazy, Suspense } from 'react'
import FallBackLoading from './component/FallBackLoading'
const MainLayout = lazy(() =>import ('./pages/MainLayout'))
const HomePage = lazy(() =>import ('./pages/HomePage'))
const Details = lazy(() =>import ('./pages/Details'))
function App() {

 const router = createBrowserRouter([
    {path:'/', element: <Suspense fallback={<FallBackLoading/>}><MainLayout/></Suspense>,children:[
      {index:true,element: <HomePage/>},
      {path:"customer/:id",element: <Details/>},
    ] }
  ])

  return  <DataContextProvider>

    <RouterProvider router={router}/>
  </DataContextProvider>
}

export default App
