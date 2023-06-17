import React from "react";
import superheroesData from './data.json';
import './SuperHeroes.css';

class SuperHeroes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            superheroes: superheroesData.superheroes,
            currentScore: 0,
            topScore: 0,
            clickedHeroes: []
        };
    }
    handleCardClick = (id) => {
        if (this.state.clickedHeroes.includes(id)) {
            this.setState({
                currentScore: 0,
                clickedHeroes: []
            });
        } else {
            this.setState(prevState => ({
                currentScore: prevState.currentScore + 1,
                clickedHeroes: [...prevState.clickedHeroes, id],
                topScore: Math.max(prevState.topScore, prevState.currentScore + 1)
            }));
        }

        this.setState(prevState => ({
            superheroes: prevState.superheroes.sort(() => Math.random() - 0.5)
        }));
    }
    render() {
        const heroes = this.state.superheroes.map((hero) =>
            <div className="superhero-card" key={hero.id} onClick={() => this.handleCardClick(hero.id)}>
              
                <img src={hero.image} alt={hero.name} style={{width: '150px'}} />
                <h2>Name: {hero.name}</h2>
                <p>Occupation: {hero.occupation}</p>
            </div>
        );

        return (
            <div>
            <nav>
                <h2>Superheroes Memory Game</h2>
                <div className="score">
                <div>Current Score: {this.state.currentScore}</div>
                <div >Top Score: {this.state.topScore}</div>
                </div>
            </nav>
            <div className="phrase">
            <h3>Get points by clicking on an image but don't click on any more than once!</h3>
       
            <div className="superheroes-row">
                {heroes}
            </div>
            </div>
            </div>
           
        )
    }
}

export default SuperHeroes;
