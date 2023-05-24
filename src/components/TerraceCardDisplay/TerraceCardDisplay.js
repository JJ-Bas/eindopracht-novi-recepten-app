import React, {useContext} from "react";
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
           <TerraceCard
               onClick={() => cuisineSetter('&cuisineType=french')}
               title='french'
           />
           <TerraceCard
               onClick={() => cuisineSetter('&cuisineType=greek')}
               title='greek'
           />
           <TerraceCard
               onClick={() => cuisineSetter('&cuisineType=indian')}
               title='indian'
           />
           <TerraceCard
               onClick={() => cuisineSetter('&cuisineType=chinese')}
               title='chinese'
           />
           <TerraceCard
               onClick={() => cuisineSetter('&cuisineType=japanese')}
               title='japanese'
           />
           <TerraceCard
               onClick={() => cuisineSetter('&cuisineType=middle-eastern')}
               title='middle eastern'
           />
           <TerraceCard
               onClick={() => cuisineSetter('&cuisineType=south-american')}
               title='south american'
           />
           <p>{cuisineType}</p>
       </>
    )
}

export default TerraceCardDisplay