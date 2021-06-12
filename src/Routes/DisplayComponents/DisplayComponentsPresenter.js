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
import palette from '../../lib/styles/paletts';
import Template from '../../lib/styles/Template';
import Line from '../../Components/Line';
import Padding from '../../Components/Padding';

const DisplayComponentsPresenter = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isOpenCheckBox, setIsOpenCheckBox] = useState(false);
  const [isOpenInput, setIsOpenInput] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenButton, setIsOpenButton] = useState(false);
  const [isOpenText, setIsOpenText] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isOpenTemplate, setIsOpenTemplate] = useState(false);
  const [isOpenLine, setIsOpenLine] = useState(false);

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

        <Wrapper blue onClick={() => setIsOpenText(!isOpenText)}>
          <Text textAlign={'center'}>Text</Text>
        </Wrapper>

        <Wrapper blue onClick={() => setIsOpenForm(!isOpenForm)}>
          <Text textAlign={'center'}>Form</Text>
        </Wrapper>

        <Wrapper blue onClick={() => setIsOpenTemplate(!isOpenTemplate)}>
          <Text textAlign={'center'}>Template</Text>
        </Wrapper>

        <Wrapper blue onClick={() => setIsOpenLine(!isOpenLine)}>
          <Text textAlign={'center'}>Line</Text>
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

        <Modal isOpen={isOpenText} closeHandler={setIsOpenText}>
          <Text hover error fontWeight={33}>
            Text 태그에
          </Text>
          <Text fontSize={16}>props(fontSize, fontWeight, color)를</Text>
          <Text hover fontWeight={700}>
            원하는 대로 넣어서 사용하세요.
          </Text>
        </Modal>

        <Modal isOpen={isOpenForm} closeHandler={setIsOpenForm}>
          <Form background={'green'}> Form</Form>
          <Form background={'blue'}>Form</Form>
        </Modal>

        <Modal isOpen={isOpenTemplate} closeHandler={setIsOpenTemplate}>
          <Template>
            <Text fontSize={30}>모바일 웹 템플렛</Text>
          </Template>
        </Modal>

        <Modal isOpen={isOpenLine} closeHandler={setIsOpenLine}>
          라인
          <Padding />
          <Line orange />
          <Padding />
          컴퍼넌트 나눌때 사용
          <Padding height={64} />
          <Line orange />
        </Modal>
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

  ${({ blue }) =>
    blue &&
    css`
      background: ${palette.clude};
      background: -webkit-gradient(
        linear,
        0 0,
        0 100%,
        from(${palette.clude}),
        to(${palette.clude})
      );
      background: -webkit-linear-gradient(
        ${palette.clude} 0%,
        ${palette.clude} 100%
      );
      background: -moz-linear-gradient(
        ${palette.clude} 0%,
        ${palette.clude} 100%
      );
      background: -o-linear-gradient(
        ${palette.clude} 0%,
        ${palette.clude} 100%
      );
      background: linear-gradient(${palette.clude} 0%, ${palette.clude} 100%);
    `}
`;

export default DisplayComponentsPresenter;
