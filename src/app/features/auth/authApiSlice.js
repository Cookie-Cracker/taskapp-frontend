import { apiSlice } from "../../api/apiSlice";
import { logout, setCredentials } from "./authSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: 'auth/login',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        signup: builder.mutation({
            query: credentials => ({
                url: 'auth/register',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        postLogout: builder.mutation({
            query: () => ({
                url: 'auth/logout',
                method: 'POST',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled
                    dispatch(logout())
                    dispatch(apiSlice.util.resetApiState())
                } catch (error) {
                    console.log('error', error)
                }
            }
        }),
        refresh: builder.mutation({
            query: () => ({
                url: 'auth/refresh_token',
                method: 'GET'
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled

                    const { access_token } = data
                    // console.log('data', data)
                    dispatch(setCredentials({ access_token }))

                } catch (error) {
                    console.log(error)
                }
            }
        }),

    })
})

export const { useLoginMutation, useSignupMutation, usePostLogoutMutation, useRefreshMutation } = authApiSlice