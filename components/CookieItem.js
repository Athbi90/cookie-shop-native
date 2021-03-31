import React from "react";
import { Text, View } from "react-native";
import { ButtonStyled, HomeWrapper } from "../styles";
import cookieStore from "../stores/CookieStore";
import { observer } from "mobx-react";

const CookieItem = ({ navigation }) => {
  if (cookieStore.loading) {
    return <Text>Loading</Text>;
  }
  const productItem = cookieStore.products.map((prod) => (
    <Text>{prod.name}</Text>
  ));
  console.log(productItem);
  return (
    <HomeWrapper>
      {productItem}
      <ButtonStyled onPress={() => navigation.navigate("Home")}>
        To the Home Page
      </ButtonStyled>
    </HomeWrapper>
  );
};

export default observer(CookieItem);
