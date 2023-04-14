import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { api, } from '../constants/env'
import { setCredentials } from '../features/auth/authSlice'
const _baseUrl = process.env.NODE_ENV === 'production'
    ? api.url_hosted
    : 'http://localhost:3900/api/'


const _baseQuery = fetchBaseQuery({
    baseUrl: _baseUrl,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
        // const token = localStorage.getItem(store_keys._token)
        if (token) {
            headers.set("Authorization", `Bearer ${token}`)
        }
        return headers
    }
})

const _baseQueryWithReauth = async (args, api, extraOptions) => {
    // console.log('_baseQueryWithReauth')
    // console.log('api', api) // signal, dispatch, getState()
    // console.log('args', args) // request url, method, body
    // console.log('extraOptions', extraOptions) //custom like {shout: true}
    let result = await _baseQuery(args, api, extraOptions)
    // if (result?.error?.originalStatus === 403) {
    if (result?.error?.status === 401 || result?.error?.status === 403) {
        // console.log('sending refresh token')
        // console.log('result', result)
        const refreshResult = await _baseQuery('/auth/refresh_token', api, extraOptions)
        // console.log('refreshResult', refreshResult.data)
        if (refreshResult?.data) {

            api.dispatch(setCredentials({ ...refreshResult.data }))
        } else {
            if (refreshResult?.error.status === 403) {
                refreshResult.result.data.message = "Your Login has Expired. "
                return refreshResult
            }

        }
    }
    return result
}

export const apiSlice = createApi({
    // baseQuery: _baseQuery,
    baseQuery: _baseQueryWithReauth,
    tagTypes: ['Project, ProjectStats Label, Task'],
    refetchOnReconnect: true,
    refetchOnMount: true,
    endpoints: builder => ({})

})
