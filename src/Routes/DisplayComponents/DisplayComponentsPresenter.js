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
  const [isOpenCheckBox, setIsOpenCheckBox] = useState(false);
  const [isOpenInput, setIsOpenInput] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenButton, setIsOpenButton] = useState(false);

  return (
    <>
      <Form>
        <Link to="/">
          <BackButton />
        </Link>

        <Wrapper onClick={() => setIsOpenCheckBox(!isOpenCheckBox)}>
          <Text textAlign={'center'}>CheckBox</Text>
        </Wrapper>

        <Wrapper onClick={() => setIsOpenInput(!isOpenInput)}>
          <Text textAlign={'center'}>Input</Text>
        </Wrapper>

        <Wrapper onClick={() => setIsOpenModal(!isOpenModal)}>
          <Text textAlign={'center'}>Modal</Text>
        </Wrapper>

        <Wrapper onClick={() => setIsOpenButton(!isOpenButton)}>
          <Text textAlign={'center'}>Button</Text>
        </Wrapper>

        <Modal isOpen={isOpenModal} closeHandler={setIsOpenModal}>
          Modal
        </Modal>

        <Modal isOpen={isOpenCheckBox} closeHandler={setIsOpenCheckBox}>
          <CheckBox
            value={isChecked}
            onClick={() => setIsChecked(!isChecked)}
          />
        </Modal>

        <Modal isOpen={isOpenInput} closeHandler={setIsOpenInput}>
          <Input />
        </Modal>

        <Modal isOpen={isOpenButton} closeHandler={setIsOpenButton}>
          <Button content={'Button'} />
        </Modal>

        <Text hover error fontWeight={33}>
          감자왕국 김남일왕자
        </Text>
      </Form>
    </>
  );
};
const Wrapper = styled.div`
  text-decoration: none;
  color: white;
  padding: 10px 30px;
  display: inline-block;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.21);
  border-bottom: 4px solid rgba(0, 0, 0, 0.21);
  border-radius: 4px;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);

  background: rgba(240, 210, 100, 1);
  background: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    from(rgba(240, 210, 100, 1)),
    to(rgba(229, 201, 96, 1))
  );
  background: -webkit-linear-gradient(
    rgba(240, 210, 100, 1) 0%,
    rgba(229, 201, 96, 1) 100%
  );
  background: -moz-linear-gradient(
    rgba(240, 210, 100, 1) 0%,
    rgba(229, 201, 96, 1) 100%
  );
  background: -o-linear-gradient(
    rgba(240, 210, 100, 1) 0%,
    rgba(229, 201, 96, 1) 100%
  );
  background: linear-gradient(
    rgba(240, 210, 100, 1) 0%,
    rgba(229, 201, 96, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f0d264', endColorstr='#e5c960', GradientType=0 );

  &:hover {
    cursor: pointer;
  }
`;

export default DisplayComponentsPresenter;
