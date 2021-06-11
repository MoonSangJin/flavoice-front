import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';
import { Text } from './defaults';

const Container = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Check = styled(View)`
  width: ${({ fontSize }) => fontSize}px;
  height: ${({ fontSize }) => fontSize}px;
  border: 1px solid black;
  margin-right: 10px;
  ${({ selected }) => selected && `background: black;`}
`;
export default ({ title, value, onChange, fontSize = 20 }) => {
  return (
    <TouchableWithoutFeedback onPress={() => onChange(!value)}>
      <Container>
        <Check selected={value} fontSize={fontSize} />
        <Text style={{fontSize, color: 'gray' }}>{title}</Text>
      </Container>
    </TouchableWithoutFeedback>
  );
};
