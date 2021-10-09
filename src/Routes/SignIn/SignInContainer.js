import axios from 'axios';
import React, { useState } from 'react';
import SignInPresenter from './SignInPresenter';
import { useHistory } from 'react-router-dom';

const SignInContainer = () => {
  const history = useHistory();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

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
      console.log('refresh 성공');
      console.log(JSON.stringify(refreshResult));
    } catch (e) {
      console.log('refresh실패');
      console.log(e);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);

    try {
      const result = await axios.post(
        'https://flavoice.shop/accounts/login/',
        values
      );
      console.log(JSON.stringify(result));

      const { data } = result;
      const accessToken = data['access_token'];
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      const refreshToken = data['refresh_token']; //ToDo refreshToken 활용방안 : 유효시간 따라 다르게
      alert('로그인 완료');
      const userData = await axios.get('https://flavoice.shop/accounts/user');
      console.log(`user 정보 ${JSON.stringify(userData)}`);
      localStorage.setItem('token', accessToken);
      setTimeout(
        () => onSilentRefresh(refreshToken),
        JWT_ACCESS_EXPIRY_TIME - 60000
      ); //()=>{}랑 onSilentRefesh() 차이 확인필요
      history.push('/');
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
