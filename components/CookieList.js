import React from "react";
import { observer } from "mobx-react";
import { Text } from "react-native";
import { HomeWrapper, HomeTitle, ButtonStyled, GoToButton } from "../styles";
import cookieStore from "../stores/CookieStore";

const CookieList = ({ navigation }) => {
  return (
    <HomeWrapper>
      <Text> Meow</Text>
    </HomeWrapper>
  );
};

export default observer(CookieList);
