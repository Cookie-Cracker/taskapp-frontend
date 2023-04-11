import { useSelector } from 'react-redux'
import { selectCurrentToken } from '../features/auth/authSlice'
import { store_keys } from '../constants/env'
import jwtDecode from 'jwt-decode'

const useAuth = () => {
    const uf = JSON.parse(localStorage.getItem(store_keys._token))
    if (uf) {
        const decoded = jwtDecode(uf)
        const { nickname, email } = decoded.user_info
        return { nickname, email }
    }
    return { nickname: '', email: '' }
}

export default useAuth