import { useState, useEffect } from 'react';
import NutrientRow from './NutrientRow';
import { createNutrientsModel } from '../helperFunctions/createNutrientsModel';
import {
    calculateNutrientAmount,
    calculateNutrientDailyValue,
} from '../helperFunctions/calculateNutrientValues';
import './NutrientRow.css';

export default function FoodNutrientSection({ foodDetails, portionAmount }) {
    const [nutrientModel, setNutrientModel] = useState(new Map());
    const [portionQuantity, setPortionQuantity] = useState(0);

    function createNutrientRow(key, background) {
        return (
            <NutrientRow
                background={background}
                name={nutrientModel.get(`${key}`).type}
                amount={calculateNutrientAmount(portionQuantity, nutrientModel, key)}
                dailyValue={calculateNutrientDailyValue(portionQuantity, nutrientModel, key)}
            />
        );
    }

    useEffect(() => {
        let tempMap = createNutrientsModel(foodDetails.foodNutrients);
        setNutrientModel(tempMap);
    }, [foodDetails]);

    useEffect(() => {
        setPortionQuantity(portionAmount);
    }, [portionAmount]);

    return (
        <section id='food-nutrients-table-section'>
            <div id='food-nutrients-table-title-container'>
                <p id='food-nutrients-title-name'>Name</p>
                <p id='food-nutrients-title-amount'>Amount</p>
                <p id='food-nutrients-title-daily-value'>Daily Value</p>
            </div>
            <div id='food-nutrients-table-content-container'>
                <div className='nutrient-row'>
                    <p className='nutrient-title'>
                        <b>General</b>
                    </p>
                </div>
                {nutrientModel.size != 0 && createNutrientRow('Energy', 'dark')}
                {nutrientModel.size != 0 && createNutrientRow('Water', 'light')}
                {nutrientModel.size != 0 && createNutrientRow('Caffeine', 'dark')}
                {nutrientModel.size != 0 && createNutrientRow('Alcohol', 'light')}
            </div>
        </section>
    );
}
