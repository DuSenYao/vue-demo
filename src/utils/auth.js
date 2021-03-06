import Cookies from 'js-cookie';

const TokenKey = 'vue-demo';

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}

export function getCurrentAuthority() {
  return ['admin'];
}

export function check(authority) {
  return getCurrentAuthority().some(item => authority.includes(item));
}
