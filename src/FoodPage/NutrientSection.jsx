import { useState, useEffect } from 'react';
import NutrientRow from './NutrientRow';
import { createNutrientsModel } from '../helperFunctions/createNutrientsModel';
import {
    calculateNutrientAmount,
    calculateNutrientDailyValue,
} from '../helperFunctions/calculateNutrientValues';
import './NutrientRow.css';

export default function NutrientSection({ foodDetails, portionAmount }) {
    const [nutrientModel, setNutrientModel] = useState(new Map());
    const [portionQuantity, setPortionQuantity] = useState(0);

    function createNutrientRow(key, background, nested = 'not nested') {
        return (
            <NutrientRow
                background={background}
                name={nutrientModel.get(`${key}`).type}
                amount={calculateNutrientAmount(portionQuantity, nutrientModel, key)}
                dailyValue={calculateNutrientDailyValue(portionQuantity, nutrientModel, key)}
                nested={nested}
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
            {nutrientModel.size != 0 && (
                <div id='food-nutrients-table-content-container'>
                    <div className='nutrient-row'>
                        <p className='nutrient-title'>General</p>
                    </div>
                    {createNutrientRow('Energy', 'dark')}
                    {createNutrientRow('Water', 'light')}
                    {createNutrientRow('Caffeine', 'dark')}
                    {createNutrientRow('Alcohol', 'light')}
                    <div className='nutrient-row dark-background'>
                        <p className='nutrient-title'>Carbohydrates</p>
                    </div>
                    {createNutrientRow('Carbs', 'light')}
                    {createNutrientRow('Sugars', 'dark', 'nested')}
                    {createNutrientRow('Added Sugars', 'light', 'nested')}
                    {createNutrientRow('Fiber', 'dark', 'nested')}
                    <div className='nutrient-row'>
                        <p className='nutrient-title'>Lipids</p>
                    </div>
                    {createNutrientRow('Fat', 'dark')}
                    {createNutrientRow('Monounsaturated', 'light', 'nested')}
                    {createNutrientRow('Polyunsaturated', 'dark', 'nested')}
                    {createNutrientRow('Saturated', 'light', 'nested')}
                    {createNutrientRow('Trans-Fats', 'dark', 'nested')}
                    {createNutrientRow('Cholesterol', 'light')}
                    <div className='nutrient-row dark-background'>
                        <p className='nutrient-title'>Protein</p>
                    </div>
                    {createNutrientRow('Protein', 'light')}
                    <div className='nutrient-row dark-background'>
                        <p className='nutrient-title'>Vitamins</p>
                    </div>
                    {createNutrientRow('B1 (Thiamin)', 'light')}
                    {createNutrientRow('B2 (Riboflavin)', 'dark')}
                    {createNutrientRow('B3 (Niacin)', 'light')}
                    {createNutrientRow('B5 (Pantothenic Acid)', 'dark')}
                    {createNutrientRow('B6 (Pyridoxine)', 'light')}
                    {createNutrientRow('B12 (Cobalamin)', 'dark')}
                    {createNutrientRow('Folate', 'light')}
                    {createNutrientRow('Vitamin A', 'dark')}
                    {createNutrientRow('Vitamin C', 'light')}
                    {createNutrientRow('Vitamin D', 'dark')}
                    {createNutrientRow('Vitamin E', 'light')}
                    {createNutrientRow('Vitamin K', 'dark')}
                    <div className='nutrient-row'>
                        <p className='nutrient-title'>Minerals</p>
                    </div>
                    {createNutrientRow('Calcium', 'dark')}
                    {createNutrientRow('Copper', 'light')}
                    {createNutrientRow('Iron', 'dark')}
                    {createNutrientRow('Magnesium', 'light')}
                    {createNutrientRow('Phosphorus', 'dark')}
                    {createNutrientRow('Potassium', 'light')}
                    {createNutrientRow('Selenium', 'dark')}
                    {createNutrientRow('Sodium', 'light')}
                    {createNutrientRow('Zinc', 'dark')}
                </div>
            )}
        </section>
    );
}
