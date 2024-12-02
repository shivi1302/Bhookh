
import { useDispatch } from 'react-redux';
import { findUser } from '../../models/Users'; // Mock user data
import types from '../types';
const dispatch= useDispatch();
export const login = (username: any, password: any)  => {
  const user = findUser(username, password);

  if (user) {
    dispatch({type: types.LOGIN_SUCCESS, payload: user});
  } else {
    dispatch({type: types.LOGIN_FAILURE, payload: 'Invalid credentials'});
  }
};

export const logout = () => ({
  type: types.LOGOUT,
});
