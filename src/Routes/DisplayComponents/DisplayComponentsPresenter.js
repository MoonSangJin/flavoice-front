import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Form from '../../Components/Form';
import BackButton from '../../Components/BackButton';
import CheckBox from '../../Components/CheckBox';
import Input from '../../Components/Input';

const DisplayComponentsPresenter = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <Form>
        <Link to="/">
          <BackButton />
        </Link>
        <CheckBox value={isChecked} onClick={() => setIsChecked(!isChecked)} />
        <Input />
      </Form>
    </>
  );
};

export default DisplayComponentsPresenter;
