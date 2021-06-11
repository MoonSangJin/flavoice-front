import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';
import Form from '../../Components/Form';
import BackButton from '../../Components/BackButton';
import CheckBox from '../../Components/CheckBox';
import Input from '../../Components/Input';
import Text from '../../Components/Text';
import Modal from '../../Components/Modal';
import Button from '../../Components/Button';

const DisplayComponentsPresenter = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <Form>
        <Link to="/">
          <BackButton />
        </Link>
        <CheckBox value={isChecked} onClick={() => setIsChecked(!isChecked)} />
        <Text hover error fontWeight={33}>
          감자왕국 김남일왕자
        </Text>
        <Input />

        <Container onClick={() => setIsOpenModal(!isOpenModal)}>
          <Text>모달</Text>
        </Container>

        <Modal isOpen={isOpenModal} closeHandler={setIsOpenModal}>
          모달은 모달모달
        </Modal>

        <Button content={'내용'} />
      </Form>
    </>
  );
};

const Container = styled.div``;

export default DisplayComponentsPresenter;
