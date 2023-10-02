import React from 'react';
import "../css/Cards.css"
import Header from './Header';
import Footer from './Footer';
import { render } from '@testing-library/react';
import miso from "../assets/recipe/miso.jpg"
import teriyaki from "../assets/recipe/teriyakisalmon.jpg"
import chirashi from "../assets/recipe/chirashi.jpg"


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

function Japanese() {
  render();
    return (
      <div className="Japanese">
        <Header/>
        
        <div className = 'rowcards'> 
        <div className='cards'>
         <Card id="open-modal-1"
          image={miso}
          title='Miso Soup'
          par = 'Instructions: Dissolve miso paste in hot water, add tofu cubes, seaweed, and garnish with chopped green onions.'
          ingredients= 'Ingredients: Miso paste, tofu cubes, seaweed, green onions.' >
          </Card>
        </div> 

        <div className='cards'>
         <Card id="open-modal-1"
          image={teriyaki}
          title='Teriyaki Salmon'
          par = 'Instructions: Pan-sear salmon fillets, brush with teriyaki sauce, and sprinkle with sesame seeds and chopped green onions.'
          ingredients='Ingredients: Salmon fillets, teriyaki sauce, sesame seeds, green onions.' />
        </div> 

        <div className='cards'>
         <Card id="open-modal-1"
           image={chirashi}
          title='Chirashi Sushi Bowl'
          par = 'Instructions: Arrange sushi rice in a bowl, top with sliced sashimi, avocado, and cucumber. Drizzle with soy sauce.'
          ingredients='Ingredients: Sushi rice, assorted sashimi (salmon, tuna), avocado, cucumber, soy sauce.' />
        </div> 


        </div>
        
        <Footer/>
      </div>
    )
}

export default Japanese;