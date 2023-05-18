import React, {useContext,useState} from "react";
import TerraceCard from "../TerraceCard/TerraceCard";
import {QuestionContext} from "../../Context/QuestionContext/QuestionContext";


function TerraceCardDisplay () {
    const {cuisineType} = useContext(QuestionContext)
    const {cuisineSetter} = useContext(QuestionContext)

    return(
       <>
           <TerraceCard
           onClick={() => cuisineSetter('&cuisineType=Asian') }
           title='asian'
           />
           <TerraceCard
               onClick={() => cuisineSetter('&cuisineType=Italian')}
               title='italian'
           />
           <TerraceCard
               onClick={() => cuisineSetter('&cuisineType=Mexican')}
               title='mexican'
           />
           <p>{cuisineType}</p>
       </>
    )
}

export default TerraceCardDisplay