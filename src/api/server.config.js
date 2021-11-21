export const baseURL = process.env.NODE_ENV === 'production' ? 'https://1sses.ru/api' : 'http://localhost:4000/api'

const settings = {
  validateURL: `${baseURL}/validate`,
  registrationURL: `${baseURL}/registration`,
  loginURL: `${baseURL}/login`,
  logoutURL: `${baseURL}/logout`
}

export default settings
