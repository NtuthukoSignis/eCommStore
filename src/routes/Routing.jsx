import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AllRoutes } from './AllRoutes'

export default function Routing() {
  return (
    <BrowserRouter>
            <Routes>
                {
                    AllRoutes.map((entry, index) => {return <Route key={index} exact={entry.ex} path={entry.path} element={entry.comp}/>;
                })
                }
            </Routes>
    </BrowserRouter>
  )
}
