import React, { useState } from 'react';
import SignInPresenter from './SignInPresenter';

const SignInContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValidationMessage, setEmailValidationMessage] = useState('');
  const [passwordValidationMessage, setPasswordValidationMessage] =
    useState('');

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const isValidEmail = () => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(email)) {
      setEmailValidationMessage('please enter a valid email.');

      return false;
    }

    return true;
  };

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
    let isValid = true;
    isValid = isValidEmail() && isValid;
    isValid = isValidPassword() && isValid;

    return isValid;
  };

  const handleSignIn = () => {
    const isValid = checkValidation();
    if (isValid) {
      alert('로그인');
      setEmail('');
      setPassword('');
    }
  };

  const handleOnKeyUp = (e) => {
    const enterKeyCode = 13;

    if (e.keyCode === enterKeyCode) {
      handleSignIn();
    }
  };

  return (
    <div>
      <SignInPresenter
        {...{
          email,
          password,
          emailValidationMessage,
          setEmailValidationMessage,
          passwordValidationMessage,
          setPasswordValidationMessage,
          handleSignIn,
          emailChangeHandler,
          passwordChangeHandler,
          isValidEmail,
          isValidPassword,
          handleOnKeyUp,
        }}
      />
    </div>
  );
};

export default SignInContainer;
