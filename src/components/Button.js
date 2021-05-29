import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { Text } from './defaults';

const Container = styled(TouchableOpacity)`
  margin-vertical: ${({ marginVertical }) => marginVertical}px;
  width: 100%;
`;
const Box = styled(View)`
  width: 100%;
  height: 50px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  ${({disabled}) => disabled &&
    `background-color: maroon;
    opacity: 0.7;`
  }
`;
const Font = styled(Text)`
  color: ${({ color }) => color};
  text-align: center;
  font-size: 30px;
`;

export default ({
  title,
  onPress,
  marginVertical = 10,
  backgroundColor = 'black',
  color = 'white',
  disabled = false,
}) => {
  return (
    <Container onPress={disabled ? null : onPress} marginVertical={marginVertical} activeOpacity={disabled ? 1 : 0.2}>
      <Box backgroundColor={backgroundColor} disabled={disabled}>
        <Font color={color}>{title}</Font>
      </Box>
    </Container>
  );
};
