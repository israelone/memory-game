import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;

  width: 200px;
  height: 300px;
  border: 1px solid black;
  margin: 10px;
  border-radius: 10px;
  -webkit-box-shadow: 5px 5px 0px -1px #a0a0a0;
  box-shadow: 5px 5px 0px -1px #a0a0a0;
`;
const CardTitle = styled.h2`
  text-align: center;
`;
const CardPicture = styled.img`
  width: 150px;
  height: 150px;
  margin: 0px auto;
`;

const Card = (props) => {
  const [cardInformation, setCardInformation] = useState({
    clicked: false,
  });
  return (
    <Container onClick={props.clicked}>
      <CardTitle>{props.title} </CardTitle>
      <CardPicture src={props.picture} alt="picture goes here"></CardPicture>
    </Container>
  );
};

export default Card;
