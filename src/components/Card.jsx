import styled from "styled-components";
import { useState } from "react";

const Contente = styled.div`
  border: 5px solid bisque;
  border-radius: 40px;
  width: 30rem;
  margin: auto;
  background-color: grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h2`
  color: bisque;
  font-size: 3rem;
  text-align: center;
  rotate: 10deg;
  text-shadow: 2px 2px black;
`;
const ImgStylised = styled.img`
  border-radius: 40px;
  width: 20rem;
  box-shadow: 2px 2px black;
`;
const Para = styled.p`
  color: bisque;
  font-size: 1.2rem;
`;
function Card() {
  const [initial, setInitial] = useState(0);

  const array = [
    {
      id: 1,
      name: "CREWSTILLANT",
      picture:
        "https://media.discordapp.net/attachments/1149622372991778816/1154757979334254602/CREW.png?ex=653baeac&is=652939ac&hm=60c8d15590c556e2cee9b2d2bacd0bba6265925172c2bd940e72568270727c9f&=&width=1000&height=1000",
      description: "L'équipe d'Ayoub ! si tu t'imagine que je suis une patate!",
    },
  ];
  return (
    <Contente>
      <Title>{array[initial].name}</Title>
      <ImgStylised src={array[initial].picture} alt="" />
      <Para>{array[initial].description}</Para>
    </Contente>
  );
}

export default Card;
