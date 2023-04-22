import { useLocation, Navigate, Outlet } from 'react-router-dom'
import React from 'react'
import { store_keys } from '../../constants/env'

const RequireAuth = () => {
    const location = useLocation()

    // const token = useSelector(selectCurrentToken)
    const token = localStorage.getItem(store_keys._token)
    return (
        token ? <Outlet /> : <Navigate to="/auth/login" state={{ from: location }} replace />

    )
}

export default RequireAuth