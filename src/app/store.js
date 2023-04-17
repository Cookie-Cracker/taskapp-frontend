import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'
import authReducer from './features/auth/authSlice'
import projectsReducer from './features/projects/projectSlice'
import { setupListeners } from "@reduxjs/toolkit/query"


// console.log(apiSlice)
export const store = configureStore({
    reducer: {
        // ? 'api'
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        projects: projectsReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production'

})
setupListeners(store.dispatch)
