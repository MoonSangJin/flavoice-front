import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SignUpPresenter from './SignUpPresenter';

const SignUpContainer = () => {
  const history = useHistory();
  const [values, setValues] = useState({
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
      alert('회원가입이 완료되었습니다. 이메일을 확인해주세요');
      history.push('/');
    } catch (e) {
      alert('회원가입 오류! 필드 값을 확인해주세요');
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
