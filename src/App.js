import "./App.css";
import styled from "styled-components";
import Card from "./Components/Card";
import React, { useState, useEffect } from "react";
import background from "./Background/background.jpg";

const GameContainer = styled.div`
  background-image: url("../Background/background.jpg");
`;
const CardsContainer = styled.div`
  display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;       
    display: flex;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    margin: 0 auto;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
}
}`;
const Header = styled.h2``;

const Instructions = styled.p``;

const CurrentScore = styled.span``;

const BestScore = styled.span``;

const App = () => {
  const [score, setScore] = useState({
    currentScore: 0,
    bestScore: 0,
  });

  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Apocalypse",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/a/a0/Apocalypse_%28En_Sabah_Nur_-_circa_2009%29.jpg",
      clicked: false,
    },

    {
      id: 2,
      title: "Cable",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/b/ba/Cable_%28Nathan_Summers%29.png",
      clicked: false,
    },
    {
      id: 3,
      title: "Captain America",
      picture:
        "https://en.wikialpha.org/mediawiki/images/1/1b/Captainamerica.jpg",
      clicked: false,
    },
    {
      id: 4,
      title: "Gambit",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Gambit_%28Marvel_Comics%29.png/250px-Gambit_%28Marvel_Comics%29.png",
      clicked: false,
    },
    {
      id: 5,
      title: "Hawkeye",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/9/99/Hawkeye_%28Clinton_Barton%29.png",
      clicked: false,
    },

    {
      id: 6,
      title: "Hulk",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/a/aa/Hulk_%28circa_2019%29.png",
      clicked: false,
    },
    {
      id: 7,
      title: "Iron Man",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/4/47/Iron_Man_%28circa_2018%29.png",
      clicked: false,
    },
    {
      id: 8,
      title: "Juggernaut",
      picture: "https://upload.wikimedia.org/wikipedia/en/4/44/Juggernaut2.PNG",
      clicked: false,
    },
    {
      id: 9,
      title: "Spider-man",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
      clicked: false,
    },
    {
      id: 10,
      title: "Thanos",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Thanos_Infinity_4.png/250px-Thanos_Infinity_4.png",
      clicked: false,
    },
    {
      id: 11,
      title: "Wanda Maximoff",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/9/97/Scarlet_Witch.jpg",
      clicked: false,
    },
    {
      id: 12,
      title: "Wolverine",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Wolverine_%28James_%27Logan%27_Howlett%29.png/250px-Wolverine_%28James_%27Logan%27_Howlett%29.png",
      clicked: false,
    },
  ]);

  useEffect(() => {
    shuffleCards();
  }, []);

  const shuffleCards = () => {
    let currentCards = [...cards];
    let shuffledCards = [];
    for (let i = currentCards.length; i > 0; i--) {
      let randomlySelectedCard = Math.floor(
        Math.random() * currentCards.length
      );
      shuffledCards.push(currentCards[randomlySelectedCard]);
      currentCards.splice(randomlySelectedCard, 1);
    }
    setCards(shuffledCards);
  };

  const handleClick = (e) => {
    let currentCardStatus = [...cards];
    console.log(currentCardStatus);
    const cardClicked = cards.findIndex(({ id }) => id === e.id);
    updateScore(currentCardStatus[cardClicked]);
    currentCardStatus[cardClicked].clicked = true;
    setCards(currentCardStatus);
    shuffleCards();
  };

  const updateScore = (cardClicked) => {
    console.log(cardClicked);
    if (cardClicked.clicked) {
      if (score.currentScore > score.bestScore) {
        setScore({ ...score, bestScore: score.currentScore, currentScore: 0 });
        resetCards();
        console.log(cardClicked, cards);
      }
    } else {
      setScore({ ...score, currentScore: score.currentScore + 1 });
    }
  };

  const resetCards = () => {
    let resetCards = [...cards];
    let resetedCards = resetCards.map((card) => ({
      ...card,
      clicked: false,
    }));

    setCards(resetedCards);
    console.log(cards);
  };

  return (
    <GameContainer>
      <Header>Memory Game</Header>
      <Instructions>
        Click on any of the cards to start game, then don't
      </Instructions>
      <CurrentScore>Current Score = {score.currentScore} </CurrentScore>
      <BestScore>Best Score = {score.bestScore}</BestScore>
      <CardsContainer>
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              title={card.title}
              clicked={() => handleClick(card)}
              picture={card.picture}
            />
          );
        })}
      </CardsContainer>
    </GameContainer>
  );
};

export default App;
