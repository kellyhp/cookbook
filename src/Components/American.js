import React from 'react';
import "../css/Cards.css"
import Header from './Header';
import Footer from './Footer';
import { render } from '@testing-library/react';
import pasta from "../assets/recipe/pasta.jpg"
import quesadillas from "../assets/recipe/quesadillas.jpg"
import salad from "../assets/recipe/salad.jpg"
import tortilla from "../assets/recipe/tortilla.jpg"

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

function American() {
  render();
    return (
      <div className="American">
        <Header/>
        
        <div className = 'rowcards'> 
        <div className='cards'>
         <Card id="open-modal-1"
          image={tortilla}
          title='Turkey and Avocado Wrap'
          par = 'Instructions: Layer turkey, avocado,lettuce, and tomato on the wrap, add mayo, roll up, and enjoy'
          ingredients= 'Ingredients: Sliced turkey, whole-grain wrap, sliced avocado, lettuce, tomato, mayo.' >
          </Card>
        </div> 


        <div className='cards'>
         <Card id="open-modal-1"
          image={quesadillas}
          title='BBQ Chicken Quesadillas'
          par = 'Instructions: Mix chicken with BBQ sauce. Place on a tortilla, add cheese and onion. Top with another tortilla. Grill until cheese melts.'
          ingredients='Ingredients: Shredded cooked chicken, BBQ sauce, tortillas, shredded cheese, red onion.' />
        </div> 

        <div className='cards'>
         <Card id="open-modal-1"
           image={salad}
          title='Caprese Chicken Salad'
          par = 'Instructions: Combine chicken, tomatoes, mozzarella, and basil. Drizzle with balsamic glaze.'
          ingredients='Ingredients: Grilled chicken strips, cherry tomatoes, fresh mozzarella, basil, balsamic glaze.' />
        </div> 

        <div className='cards'>
         <Card id="open-modal-1"
           image={pasta}
          title='Pesto Pasta with Cherry Tomatoes'
          par = 'Instructions: Toss cooked pasta with pesto, halved cherry tomatoes, and Parmesan cheese.'
          ingredients='Ingredients: Cooked pasta, pesto sauce, cherry tomatoes, Parmesan cheese.' />
        </div> 
        </div>
        
        <Footer/>
      </div>
    )
}

export default American;