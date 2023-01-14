import React, { useState } from 'react'

const DeckBuilder = () => {
    // Initialize an empty array for storing the cards in the deck
    const [deck, setDeck] = useState([])

    // Function to add a card to the deck
    const addCard = (card) => {
        setDeck([...deck, card])
    }

    // Function to remove a card from the deck
    const removeCard = (card) => {
        setDeck(deck.filter(c => c !== card))
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h1>card view</h1>
                </div>
                <div className='col'>
                    <h1>deck view</h1>
                </div>
                <div className='col'>
                    <h1>search view</h1>
                    <div class="card">
                        <div class="card-body">
                            <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                            <div class="row">
                                <div class="col-sm-4">Search Result 1</div>
                                <div class="col-sm-4">Search Result 2</div>
                                <div class="col-sm-4">Search Result 3</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div>
        //     <h1>Deck Builder</h1>
        //         <div>
        //             {/* Display the cards in the deck */}
        //             <ul>
        //                 {deck.map((card, index) => (
        //                     <li key={index}>
        //                         {card}
        //                         <button onClick={() => removeCard(card)}>Remove</button>
        //                     </li>
        //                 ))}
        //             </ul>
        //         </div>
        //     <div>
        //         {/* Input for adding a new card */}
        //         <input type="text" placeholder="Enter a card name" id="cardInput" />
        //         <button onClick={() => addCard(document.getElementById('cardInput').value)}>Add Card</button>
        //     </div>
        // </div>
    )
}

export default DeckBuilder;
