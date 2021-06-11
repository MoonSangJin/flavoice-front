import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Form from '../../Components/Form';
import BackButton from '../../Components/BackButton';
import CheckBox from '../../Components/CheckBox';

const DisplayComponentsPresenter = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <Form>
        <Link to="/">
          <BackButton />
        </Link>
        <CheckBox value={isChecked} onClick={() => setIsChecked(!isChecked)} />
      </Form>
    </>
  );
};

export default DisplayComponentsPresenter;
