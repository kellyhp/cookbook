import React from 'react';
import "../css/Cards.css"
import Header from './Header';
import Footer from './Footer';
import { render } from '@testing-library/react';
import beefandbroccoli from "../assets/recipe/beefandbroccoli.jpg"
import friedrice from "../assets/recipe/friedrice.jpg"
import kungpao from "../assets/recipe/kungpao.jpg"
import springrolls from "../assets/recipe/springrolls.jpg"
import stirfry from "../assets/recipe/stirfry.jpg"

class Card extends React.Component {
  render() 
  {
    return(
        <div className="card">
          <img src={this.props.image} />
          <div className="card-body">
            <h2>{this.props.title}</h2>
            <p>{this.props.par}</p>
            <h5>{this.props.ingredients}</h5>   
            </div>
        </div>
    )
  }
}

function Chinese() {
  render();
    return (
      <div className="Chinese">
        <Header/>
        
        <div className = 'rowcards'> 
        <div className='cards'>
         <Card id="open-modal-1"
          image={beefandbroccoli}
          title='Beef and Broccoli Stir-Fry'
          par = 'Instructions: Stir-fry sliced beef and broccoli in a wok with soy sauce, oyster sauce, and minced garlic.'
          ingredients= 'Ingredients: Sliced beef, broccoli florets, soy sauce, oyster sauce, garlic.' >
          </Card>
        </div> 


        <div className='cards'>
         <Card id="open-modal-1"
          image={friedrice}
          title='Egg Fried Rice'
          par = 'Instructions: Scramble eggs in a pan, add cooked rice, frozen peas, and carrots. Stir in soy sauce and sesame oil.'
          ingredients='Ingredients: Cooked rice, eggs, frozen peas and carrots, soy sauce, sesame oil.' />
        </div> 

        <div className='cards'>
         <Card id="open-modal-1"
           image={kungpao}
          title='Kung Pao Chicken'
          par = 'Instructions: Sauté chicken, bell peppers, and peanuts in a mix of soy sauce and hoisin sauce until cooked.'
          ingredients='Ingredients: Chicken, peanuts, bell peppers, soy sauce, hoisin sauce.' />
        </div> 

        <div className='cards'>
         <Card id="open-modal-1"
           image={springrolls}
          title='Spring Rolls'
          par = 'Instructions: Fill spring roll wrappers with a mixture of shredded vegetables, roll them up, and pan-fry until golden.'
          ingredients='Ingredients: Spring roll wrappers, shredded cabbage, carrots, mushrooms, soy sauce.' />
        </div> 

        <div className='cards'>
         <Card id="open-modal-1"
           image={stirfry}
          title='Stir Fry Chicken w/ Vegetables'
          par = 'Instructions: Stir-fry chicken in a hot wok with vegetables, soy sauce, minced ginger, and garlic until cooked through.'
          ingredients='Ingredients: Sliced chicken breast, mixed vegetables (bell peppers, broccoli, carrots), soy sauce, ginger, garlic.' />
        </div> 

        </div>
        
        <Footer/>
      </div>
    )
}

export default Chinese;