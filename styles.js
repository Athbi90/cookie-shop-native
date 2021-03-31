import styled from "styled-components/native";

export const HomeWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const HomeTitle = styled.Text`
  color: ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.backgroundColor};
  font-size: 45;
  text-align: center;
`;
export const GoToButton = styled.Text`
  font-size: 30;
  color: #24107f;
  background-color: #ffb7ff;
`;

export const ButtonStyled = styled.Text`
  font-size: 20;
  color: #5296a5;
`;
