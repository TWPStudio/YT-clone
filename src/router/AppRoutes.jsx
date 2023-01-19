import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

import { SignUp } from '../pages/SignUp'


export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignUp />} />
      </Routes>
    </Router>
  )
}