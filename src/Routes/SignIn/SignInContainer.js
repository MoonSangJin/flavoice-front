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

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);

    try {
      const result = await axios.post(
        'https://flavoice.shop/accounts/login/',
        values
      );
      console.log(result);

      const { data } = result;
      const accessToken = data['access_token'];
      const refreshToken = data['refresh_token']; //ToDo refreshToken 활용방안 : 유효시간 따라 다르게
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      alert('로그인 완료');
      const userData = await axios.get('https://flavoice.shop/accounts/user');
      console.log(`user 정보 ${JSON.stringify(userData)}`);
      localStorage.setItem('token', accessToken);
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
