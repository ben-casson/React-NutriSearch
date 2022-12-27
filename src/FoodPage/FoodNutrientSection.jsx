import { useState, useEffect } from 'react';
import NutrientRows from './NutrientRows';
import NutrientRow from './NutrientRow';
import { createNutrientModel } from '../helperFunctions';
import './NutrientRow.css';

export default function FoodNutrientSection({ foodDetails, portionAmount }) {
    const [nutrientModel, setNutrientModel] = useState(new Map());
    const [portionQuantity, setPortionQuantity] = useState(0);

    function createNutrientRow(key, background) {
        return (
            <NutrientRow
                background={background}
                name={nutrientModel.get(`${key}`).type}
                amount={
                    (portionAmount
                        ? Math.round(
                              nutrientModel.get(`${key}`).amount *
                                  portionQuantity
                          ) / 100
                        : nutrientModel.get(`${key}`).amount) +
                    ' ' +
                    nutrientModel.get(`${key}`).unit
                }
                dailyValue={
                    (portionAmount
                        ? Math.round(
                              (nutrientModel.get(`${key}`).amount *
                                  portionQuantity *
                                  10) /
                                  nutrientModel.get(`${key}`).dailyValue
                          ) / 10
                        : Math.round(
                              (nutrientModel.get(`${key}`).amount /
                                  nutrientModel.get(`${key}`).dailyValue) *
                                  1000
                          ) / 10) + '%'
                }
            />
        );
    }

    useEffect(() => {
        let tempMap = createNutrientModel(foodDetails.foodNutrients);
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
                {/* <NutrientRow /> */}
                {nutrientModel.size != 0 && createNutrientRow('Energy', 'dark')}
                {Object.keys(foodDetails).length != 0 && (
                    <NutrientRows
                        nutrientsArray={foodDetails.foodNutrients}
                        foodDetails={foodDetails}
                        portionAmount={portionAmount}
                    />
                )}
            </div>
        </section>
    );
}
