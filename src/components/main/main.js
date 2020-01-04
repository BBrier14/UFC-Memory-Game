//----- Imports -----//
import React, { Component } from "react";
import FighterBox from "./fighterbox";
import Score from "./score";

//----- Array and Corresponding Function -----//
const shuffleArray = arr =>
  arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);

const initFighters = [
  {
    name: "Conor Mcgregor",
    img: "img/fighters/conor.png",
    clicked: false
  },
  {
    name: "Cody Garbrandt",
    img: "img/fighters/cody.png",
    clicked: false
  },
  {
    name: "Khabib Nurmogomedov",
    img: "img/fighters/khabib.png",
    clicked: false
  },
  {
    name: "Max Holloway",
    img: "img/fighters/max.png",
    clicked: false
  },
  {
    name: "Nate Diaz",
    img: "img/fighters/natediaz.png",
    clicked: false
  },
  {
    name: "TJ Dillashaw",
    img: "img/fighters/tj.png",
    clicked: false
  },
  {
    name: "Tony Ferguson",
    img: "img/fighters/tony.png",
    clicked: false
  },
  {
    name: "Zabit Magnomedsharipov",
    img: "img/fighters/zabit.png",
    clicked: false
  },
  {
    name: "Jorge Masvidal",
    img: "img/fighters/jorge.png",
    clicked: false
  }
];

//----- State Change -----//
export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        score: 0
      },
      fighters: shuffleArray(initFighters)
    };
  }

  onFighterClick = index => {
    if (!this.state.fighters[index].clicked) {
      this.setState({
        fighters: shuffleArray(
          this.state.fighters.map((fighter, current) => {
            return current === index ? { ...fighter, clicked: true } : fighter;
          })
        ),
        user: {
          ...this.state.user,
          score: this.state.user.score + 1
        }
      });
    } else {
      this.setState({
        figthers: shuffleArray(
          this.state.fighters.map(fighter => {
            return { ...fighter, clicked: false };
          })
        ),
        user: {
          ...this.state.user,
          score: 0
        }
      });
    }
  };

  //----- Render ------//
  render() {
    return (
      <div className="Main">
        <Score score={this.state.user.score} />
        <FighterBox
          fighters={this.state.fighters}
          onFighterClick={this.onFighterClick}
        />
      </div>
    );
  }
}
