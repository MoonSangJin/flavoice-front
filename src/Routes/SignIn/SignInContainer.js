import React, { useState } from 'react';
import SignInPresenter from './SignInPresenter';

const SignInContainer = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumberValidationMessage, setPhoneNumberValidationMessage] =
    useState('');
  const [passwordValidationMessage, setPasswordValidationMessage] =
    useState('');

  const phoneNumberChangeHandler = (e) => {
    setPhoneNumber(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
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
    if (isValidPassword()) return true;
    else return false;
  };

  const handleSignIn = () => {
    if (phoneNumber && checkValidation()) {
      alert('signin api 연결');
    } else {
      alert('signin 실패');
    }
    setPhoneNumber('');
    setPassword('');
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
          phoneNumber,
          phoneNumberChangeHandler,
          phoneNumberValidationMessage,
          setPhoneNumberValidationMessage,
          password,
          passwordChangeHandler,
          passwordValidationMessage,
          setPasswordValidationMessage,
          handleSignIn,
          isValidPassword,
          handleOnKeyUp,
        }}
      />
    </div>
  );
};

export default SignInContainer;
