import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SignInPresenter from './SignInPresenter';
import { useHistory } from 'react-router-dom';
import checkLogin from '../../util/checkLogin';

const SignInContainer = () => {
  const history = useHistory();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (checkLogin()) {
      history.push('/home');
    }
  }, []);

  const JWT_ACCESS_EXPIRY_TIME = 5 * 60 * 1000; //5분 밀리초
  const JWT_REFRESH_EXPIRY_TIME = 60 * 60 * 1000; //60분 밀리초

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const onSilentRefresh = async (refreshToken) => {
    try {
      const refreshResult = await axios.post(
        'https://flavoice.shop/accounts/token/refresh/',
        { refresh: refreshToken }
      );
      const refreshAccessToken = refreshResult['data']['access'];
      if (localStorage.getItem('token') !== refreshAccessToken) {
        console.log('access token과 refresh access 달라서 ACCESS 갱신되었음');
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${refreshAccessToken}}`;
        localStorage.setItem('token', refreshAccessToken);
      }
    } catch (e) {
      console.log('refresh실패');
      console.log(e);
    }
  };

  const loginSuccess = (result) => {
    const { data } = result;
    const accessToken = data['access_token'];
    const refreshToken = data['refresh_token']; //ToDo refreshToken 활용방안 : 유효시간 따라 다르게
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    localStorage.setItem('token', accessToken);
    localStorage.setItem('refreshToken', refreshToken);

    alert('로그인 완료');
    setTimeout(
      () => onSilentRefresh(localStorage.getItem('refreshToken')),
      JWT_ACCESS_EXPIRY_TIME - 60000
    );
    history.push('/home');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);

    try {
      const result = await axios.post(
        'https://flavoice.shop/accounts/login/',
        values
      );
      loginSuccess(result);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <SignInPresenter {...{ handleChange, handleSubmit }} />
    </div>
  );
};

export default SignInContainer;
