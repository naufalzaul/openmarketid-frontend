
const BASE_URL = 'http://localhost:8080/api/v1';

const apiBash = {
  login: `${BASE_URL}/auth/login`,
  user: `${BASE_URL}/users`,
  customer: `${BASE_URL}/customers`,
  product: `${BASE_URL}/products`,
  tax: `${BASE_URL}/taxes`,
  transaction: `${BASE_URL}/transactions`
}

export default apiBash;