import React, { useState } from 'react';
import SignUpPresenter from './SignUpPresenter';

const SignUpContainer = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
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
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
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

  const handleSignUp = () => {
    const isValid = checkValidation();
    if (isValid) {
      console.log('유효함');
    }
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
          email,
          password,
          emailValidationMessage,
          setEmailValidationMessage,
          passwordValidationMessage,
          setPasswordValidationMessage,
          handleSignUp,
          emailChangeHandler,
          passwordChangeHandler,
          isValidEmail,
          isValidPassword,
          handleOnKeyUp,
          name,
          nameChangeHandler,
          age,
          ageChangeHandler,
        }}
      />
    </div>
  );
};

export default SignUpContainer;
