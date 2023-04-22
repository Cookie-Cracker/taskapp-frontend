import { store_keys } from '../constants/env'
import jwtDecode from 'jwt-decode'

const useAuth = () => {
    const uf = JSON.parse(localStorage.getItem(store_keys._token))
    if (uf) {
        const decoded = jwtDecode(uf)
        const { email } = decoded.user_info
        return { email }
    }
    return { email: '' }
}

export default useAuth