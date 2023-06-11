import React, {useContext} from "react";
import TerraceCard from "../TerraceCard/TerraceCard";
import {QuestionContext} from "../../Context/QuestionContext/QuestionContext";
import styles from "./TerraceCardDisplay.module.scss"
import asianTerrace from "../../assets/images/terrace-pictures/asia.jpg"
import italianTerrace from "../../assets/images/terrace-pictures/italy.jpg"
import mexicanTerrace from "../../assets/images/terrace-pictures/mexico.jpg"
import frenchTerrace from "../../assets/images/terrace-pictures/france.jpg"
import greeceTerrace from "../../assets/images/terrace-pictures/greece.jpg"
import indianTerrace from "../../assets/images/terrace-pictures/india.jpg"
import chinaTerrace from "../../assets/images/terrace-pictures/china.jpg"
import japaneseTerrace from "../../assets/images/terrace-pictures/japan.jpg"
import middleEasternTerrace from "../../assets/images/terrace-pictures/middle-eastern.jpg"
import southAmericaTerrace from "../../assets/images/terrace-pictures/south-america.jpg"



function TerraceCardDisplay () {
    const {cuisineSetter} = useContext(QuestionContext)

    return(
       <div className={styles["container-card-display"]}>
           <TerraceCard
           onClick={() => cuisineSetter('&cuisineType=Asian')}
           image={asianTerrace}
           title='asian'
           />
           <TerraceCard
               onClick={() => cuisineSetter('&cuisineType=Italian')}
               image={italianTerrace}
               title='italian'
           />
           <TerraceCard
               onClick={() => cuisineSetter('&cuisineType=Mexican')}
               image={mexicanTerrace}
               title='mexican'
           />
           <TerraceCard
               onClick={() => cuisineSetter('&cuisineType=french')}
               image={frenchTerrace}
               title='french'
           />
           <TerraceCard
               onClick={() => cuisineSetter('&cuisineType=greek')}
               image={greeceTerrace}
               title='greek'
           />
           <TerraceCard
               onClick={() => cuisineSetter('&cuisineType=indian')}
               image={indianTerrace}
               title='indian'
           />
           <TerraceCard
               onClick={() => cuisineSetter('&cuisineType=chinese')}
               image={chinaTerrace}
               title='chinese'
           />
           <TerraceCard
               onClick={() => cuisineSetter('&cuisineType=japanese')}
               image={japaneseTerrace}
               title='japanese'
           />
           <TerraceCard
               onClick={() => cuisineSetter('&cuisineType=middle-eastern')}
               image={middleEasternTerrace}
               title='middle eastern'
           />
           <TerraceCard
               onClick={() => cuisineSetter('&cuisineType=south-american')}
               image={southAmericaTerrace}
               title='south american'
           />
       </div>
    )
}

export default TerraceCardDisplay