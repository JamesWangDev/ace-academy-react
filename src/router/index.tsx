import {Route, Routes, Navigate } from 'react-router-dom'
import SignIn from '../pages/auth/signin'
import ResetPassword from '../pages/auth/reset-password'
import NewPassword from '../pages/auth/new-password'
import OverView from '../pages/overview'
import AllCourses from '../pages/all-courses/all-courses'
import Admin from '../pages/admin'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to={'/signin'} />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/new-password" element={<NewPassword />} />
            <Route path="/overview" element={<OverView />} />
            <Route path="/all-courses" element={<AllCourses />} />
            <Route path='/admin/*' element={<Admin />} />
        </Routes>
    )
}

export default Router