import React from 'react';
import { createBrowserRouter,RouterProvider} from 'react-router';
import Login from './Login';
import Browse from './Browse';


const Body = () => {

    const Router=createBrowserRouter([
        {path:'/',
            element:<Login/>
        },
        {path:'/browse',
        element:<Browse/>
         }
    ])
  return (
    <RouterProvider router={Router}/>
    
  )
}

export default Body;