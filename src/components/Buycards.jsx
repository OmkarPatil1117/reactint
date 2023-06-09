import React from 'react'
import { useState } from 'react'
import Card from "../components/Card"

const Buycards = () => {
    // Array Contains img
    const [arr, setarr ] = useState([
        {
            img : "https://is1-3.housingcdn.com/01c16c28/6f91efb6b51c558718802eac77aeea8b/v0/medium/2_bhk_apartment-for-sale-narhe-Pune-others.jpg"
        },
        {
            img : "https://is1-3.housingcdn.com/01c16c28/6f91efb6b51c558718802eac77aeea8b/v0/medium/2_bhk_apartment-for-sale-narhe-Pune-others.jpg"
        },
        {
            img : "https://is1-3.housingcdn.com/01c16c28/6f91efb6b51c558718802eac77aeea8b/v0/medium/2_bhk_apartment-for-sale-narhe-Pune-others.jpg"
        },
        {
            img : "https://is1-3.housingcdn.com/01c16c28/6f91efb6b51c558718802eac77aeea8b/v0/medium/2_bhk_apartment-for-sale-narhe-Pune-others.jpg"
        },
        {
            img : "https://is1-3.housingcdn.com/01c16c28/6f91efb6b51c558718802eac77aeea8b/v0/medium/2_bhk_apartment-for-sale-narhe-Pune-others.jpg"
        },
    ])
  return (
    <>     
    <div id='Buycard'>
        {/* //iterarting till arry */}
     {arr.map( (item, index)=> {
        return (
            <div class="card" key={index} style={{ width : "300px" , margin : "0.5rem" }}>
            <img src={item.img} class="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Cheapest Apartment</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Click hera to know more</a>
            </div>
            </div>
        )
     })}
     </div>
     <br />
     <h1 style={{ textAlign : "center" , margin : "1rem" }}>Everything you nedd at one place</h1>
     {/* //imported Card Componnet */}
     <Card></Card>
     </>

  )
}

export default Buycards