import React from 'react'
import "./broodingChance.css"

function BroodingChance() {
  return (
        <section className='main'>
      <div className='stawi-here'>
        <h2>StawiBrood is here to</h2>
        <h1>Give your chicks a fighting chance</h1>
        </div>

        <div className='cards'>
            <div className='box'>
            <i class="fa fa-usd" aria-hidden="true"></i> 

                <h1>Affordable</h1>
                <p>Costly friendly</p>
            </div>

            <div className='box'>
            <i class="fa fa-bullseye 3x" aria-hidden="true"></i>

                <h1>Accurate</h1>
                <p>Tasks accurate</p>
            </div>

            <div className='box'>
            <i class="fa fa-line-chart" aria-hidden="true"></i>


                <h1>Maximise profit</h1>
                <p>Cuts down the losses</p>
            </div>
            <div className='box'>
            <i class="fa fa-clock-o" aria-hidden="true"></i>

                <h1>Saves Time</h1>
                <p>Minimum supervision</p>
            </div>



        </div>
      </section>
 
  )
}

export default BroodingChance