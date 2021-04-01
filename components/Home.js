import React from "react";
import { observer } from "mobx-react";
import { HomeWrapper, HomeTitle, ButtonStyled, GoToButton } from "../styles";

const Home = ({ navigation }) => {
  return (
    <HomeWrapper>
      <HomeTitle> To Infinity and Beyond!!</HomeTitle>
      <ButtonStyled onPress={() => alert("Buzz Lightyear")}>
        Who is sending this message?
      </ButtonStyled>

      <GoToButton onPress={() => navigation.push("List")}>List Page</GoToButton>
    </HomeWrapper>
  );
};
export default observer(Home);
