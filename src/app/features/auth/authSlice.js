import { createSlice } from "@reduxjs/toolkit";
import { store_keys } from "../../constants/env";

const authSlice = createSlice({
    name: 'auth',
    initialState: { token: null },
    reducers: {
        setCredentials: (state, { payload }) => {
            const { access_token } = payload
            state.token = access_token
            localStorage.setItem(store_keys._token, JSON.stringify(access_token))

        },
        logout: (state) => {
            state.token = null
            localStorage.removeItem(store_keys._token)
        }
    }
})

export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer
export const selectCurrentToken = (state) => state.auth.token 