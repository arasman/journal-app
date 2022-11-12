import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRotes } from '../auth/routes'
import { JournalRoutes } from '../journal/routes'

export const AppRouter = () => {
  return (
   <Routes>
        {/* Login y Register */}
        <Route path='/auth/*' element={<AuthRotes/>} />
        {/* Journal App */}
        <Route path='/*' element={<JournalRoutes/>} />
   </Routes>
  )
}
