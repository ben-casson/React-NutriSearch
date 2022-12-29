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
            <div id='food-nutrients-table-content-container'>
                <div className='nutrient-row'>
                    <p className='nutrient-title'>General</p>
                </div>
                {nutrientModel.size != 0 && createNutrientRow('Energy', 'dark')}
                {nutrientModel.size != 0 && createNutrientRow('Water', 'light')}
                {nutrientModel.size != 0 && createNutrientRow('Caffeine', 'dark')}
                {nutrientModel.size != 0 && createNutrientRow('Alcohol', 'light')}
                <div className='nutrient-row dark-background'>
                    <p className='nutrient-title'>Carbohydrates</p>
                </div>
                {nutrientModel.size != 0 && createNutrientRow('Carbs', 'light')}
                {nutrientModel.size != 0 && createNutrientRow('Sugars', 'dark', 'nested')}
                {nutrientModel.size != 0 && createNutrientRow('Added Sugars', 'light', 'nested')}
                {nutrientModel.size != 0 && createNutrientRow('Fiber', 'dark', 'nested')}
                <div className='nutrient-row'>
                    <p className='nutrient-title'>Lipids</p>
                </div>
                {nutrientModel.size != 0 && createNutrientRow('Fat', 'dark')}
                {nutrientModel.size != 0 && createNutrientRow('Monounsaturated', 'light', 'nested')}
                {nutrientModel.size != 0 && createNutrientRow('Polyunsaturated', 'dark', 'nested')}
                {nutrientModel.size != 0 && createNutrientRow('Saturated', 'light', 'nested')}
                {nutrientModel.size != 0 && createNutrientRow('Trans-Fats', 'dark', 'nested')}
                {nutrientModel.size != 0 && createNutrientRow('Cholesterol', 'light')}
                <div className='nutrient-row dark-background'>
                    <p className='nutrient-title'>Protein</p>
                </div>
                {nutrientModel.size != 0 && createNutrientRow('Protein', 'light')}
                <div className='nutrient-row dark-background'>
                    <p className='nutrient-title'>Vitamins</p>
                </div>
                {nutrientModel.size != 0 && createNutrientRow('B1 (Thiamin)', 'light')}
                {nutrientModel.size != 0 && createNutrientRow('B2 (Riboflavin)', 'dark')}
                {nutrientModel.size != 0 && createNutrientRow('B3 (Niacin)', 'light')}
                {nutrientModel.size != 0 && createNutrientRow('B5 (Pantothenic Acid)', 'dark')}
                {nutrientModel.size != 0 && createNutrientRow('B6 (Pyridoxine)', 'light')}
                {nutrientModel.size != 0 && createNutrientRow('B12 (Cobalamin)', 'dark')}
                {nutrientModel.size != 0 && createNutrientRow('Folate', 'light')}
                {nutrientModel.size != 0 && createNutrientRow('Vitamin A', 'dark')}
                {nutrientModel.size != 0 && createNutrientRow('Vitamin C', 'light')}
                {nutrientModel.size != 0 && createNutrientRow('Vitamin D', 'dark')}
                {nutrientModel.size != 0 && createNutrientRow('Vitamin E', 'light')}
                {nutrientModel.size != 0 && createNutrientRow('Vitamin K', 'dark')}
                <div className='nutrient-row'>
                    <p className='nutrient-title'>Minerals</p>
                </div>
                {nutrientModel.size != 0 && createNutrientRow('Calcium', 'dark')}
                {nutrientModel.size != 0 && createNutrientRow('Copper', 'light')}
                {nutrientModel.size != 0 && createNutrientRow('Iron', 'dark')}
                {nutrientModel.size != 0 && createNutrientRow('Magnesium', 'light')}
                {nutrientModel.size != 0 && createNutrientRow('Phosphorus', 'dark')}
                {nutrientModel.size != 0 && createNutrientRow('Potassium', 'light')}
                {nutrientModel.size != 0 && createNutrientRow('Selenium', 'dark')}
                {nutrientModel.size != 0 && createNutrientRow('Sodium', 'light')}
                {nutrientModel.size != 0 && createNutrientRow('Zinc', 'dark')}
            </div>
        </section>
    );
}
