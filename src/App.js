import logo from './logo.svg';
import './App.css';
import React from 'react';
import  Login from './_components/Login/Login'
import Home from './_components/Home/Home'
import Header from './_components/Header/Header.js'
import {createBrowserRouter, Navigate, Outlet, RouterProvider} from 'react-router-dom'
import { lazy, Suspense } from 'react';
import ErrorMessage from './_components/Header/Error';
import Counter from './_redux_store/counter';
function App() {

let router = createBrowserRouter([
  {path:'',element:<Navigate to="/login"/>},
  {path:'/login',element:<Login/>},
  {path:'/header',element:<Header/>},
  {path:'/counter',element:<Counter/>},
  {path:'/home',element:<Home/>},
  
])
  return (
    <div className="App">
      <header className="App-header">
      <RouterProvider router={router}/>
      <Outlet/>
      </header>
    </div>
  );
}

export default App;
