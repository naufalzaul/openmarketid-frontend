import { getToken } from '@/utils/handleToken';
import { jwtDecode } from 'jwt-decode';

export default function decodeToken() {

  const token = getToken()
  if (token) {
    const decoded = jwtDecode(token);
    return {
      email: decoded.sub || null,
      role: decoded.roles[0] || null
    }
  }
};

