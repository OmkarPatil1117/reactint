import React, { useState } from 'react'

const Card = () => {
    const [arr, setarr ] = useState([
        {
            img : "https://offers.freecharge.in/ICICIBank50/images/ICICIBank50.png"
        },
        {
            img : "https://1.bp.blogspot.com/-naqqxAuAU40/X00KMbZYxrI/AAAAAAAAFBI/Ckx3Mha1oHQHGRdWDFCWY6fJCo5P5zybwCLcBGAsYHQ/s16000/Axis%2BFlipkart%2BCredit%2BCard.jpg"
        },
        {
            img : "https://offers.freecharge.in/ICICIBank50/images/ICICIBank50.png"
        },
        {
            img : "https://1.bp.blogspot.com/-naqqxAuAU40/X00KMbZYxrI/AAAAAAAAFBI/Ckx3Mha1oHQHGRdWDFCWY6fJCo5P5zybwCLcBGAsYHQ/s16000/Axis%2BFlipkart%2BCredit%2BCard.jpg"
        },
        {
            img : "https://offers.freecharge.in/ICICIBank50/images/ICICIBank50.png"
        },
    ])
  return (
    <>
    <div className='Offer' >
    { arr.map( (i, index)=> {
        return (
            <img src={i.img} className='OfferCard' key={index} width={"300px"} height={"300px"} style={{ margin : "2rem", }} alt="" />
        )
    } ) }
    </div>
    </>
  )
}

export default Card