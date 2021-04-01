import styled from "styled-components/native";

export const HomeWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const HomeTitle = styled.Text`
  color: ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.backgroundColor};
  font-size: 45;
  text-align: center;
`;

export const CookieImage = styled.Image`
  width: 140;
  height: 140;
`;

export const GoToButton = styled.Text`
  font-size: 30;
  color: ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const ButtonStyled = styled.Text`
  font-size: 20;
  color: ${(props) => props.theme.mainColor};
`;
