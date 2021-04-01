import React from "react";
import { Text } from "react-native";
import { ButtonStyled, HomeWrapper, HomeTitle, CookieImage } from "../styles";
import cookieStore from "../stores/CookieStore";
import { observer } from "mobx-react";

const CookieItem = ({ navigation, route }) => {
  if (cookieStore.loading) {
    return <HomeTitle>Loading</HomeTitle>;
  }
  const { id } = route.params;
  const productItem = cookieStore.products.find((prod) => prod.id === +id);
  console.log(productItem);

  return (
    <HomeWrapper>
      <CookieImage source={{ uri: productItem.image }} />
      <HomeTitle>{productItem.name}</HomeTitle>
      <Text>Price: {productItem.price} KWD</Text>
      <ButtonStyled onPress={() => navigation.navigate("Home")}>
        To the Home Page
      </ButtonStyled>
    </HomeWrapper>
  );
};

export default observer(CookieItem);
