import React, { useState } from 'react';
import SignUpPresenter from './SignUpPresenter';

const SignUpContainer = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [passwordValidationMessage, setPasswordValidationMessage] =
    useState('');
  //const [email, setEmail] = useState('');
  //const [emailValidationMessage, setEmailValidationMessage] = useState('');

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const phoneNumberChangeHandler = (e) => {
    setPhoneNumber(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  /* const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const isValidEmail = () => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(email)) {
      setEmailValidationMessage('please enter a valid email.');

      return false;
    }

    return true;
  };*/

  const isValidPassword = () => {
    if (password.length < 8) {
      setPasswordValidationMessage(
        'please enter a password of at least 8 characters'
      );
      return false;
    }
    return true;
  };

  const checkValidation = () => {
    if (name && phoneNumber && age && password && isValidPassword())
      return true;
    else return false;
  };

  const handleSignUp = () => {
    if (checkValidation()) {
      alert('가입완료');
    } else {
      alert('가입실패');
    }
    setName('');
    setAge('');
    setPhoneNumber('');
    setPassword('');
  };

  const handleOnKeyUp = (e) => {
    const enterKeyCode = 13;

    if (e.keyCode === enterKeyCode) {
      handleSignUp();
    }
  };

  return (
    <div>
      <SignUpPresenter
        {...{
          name,
          nameChangeHandler,
          phoneNumber,
          phoneNumberChangeHandler,
          age,
          ageChangeHandler,
          password,
          passwordValidationMessage,
          setPasswordValidationMessage,
          handleSignUp,
          passwordChangeHandler,
          isValidPassword,
          handleOnKeyUp,
        }}
      />
    </div>
  );
};

export default SignUpContainer;
