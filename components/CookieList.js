import React from "react";
import { ButtonStyled, HomeWrapper, HomeTitle } from "../styles";
import cookieStore from "../stores/CookieStore";
import { observer } from "mobx-react";
import { TouchableOpacity } from "react-native-gesture-handler";

const CookieList = ({ navigation }) => {
  if (cookieStore.loading) {
    return <HomeTitle>Loading</HomeTitle>;
  }
  const productList = cookieStore.products.map((prod) => (
    <TouchableOpacity
      onPress={() => navigation.push("Cookie Details", { id: prod.id })}
      key={prod.id}
    >
      <HomeTitle>{prod.name}</HomeTitle>
    </TouchableOpacity>
  ));
  console.log(productList);
  return (
    <HomeWrapper>
      {productList}
      <ButtonStyled onPress={() => navigation.navigate("Home")}>
        To the Home Page
      </ButtonStyled>
    </HomeWrapper>
  );
};

export default observer(CookieList);
