import axios from 'axios';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import SignUpPresenter from './SignUpPresenter';

const SignUpContainer = () => {
  const [values, setValues] = React.useState({
    email: '',
    password1: '',
    password2: '',
    phone_number: '',
    birthday: '',
    gender: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
      await axios.post('https://flavoice.shop/accounts/registration/', values);
      alert('회원가입이 완료되었습니다.');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <SignUpPresenter {...{ values, handleChange, handleSubmit }} />
    </div>
  );
};

export default SignUpContainer;
