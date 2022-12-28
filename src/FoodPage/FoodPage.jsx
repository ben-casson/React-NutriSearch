import { useState, useEffect } from 'react';
import './FoodPage.css';
import FoodInfoSection from './FoodInfoSection';
import FoodNutrientSection from './FoodNutrientSection';

export default function FoodPage({ foodIsSelected, selectedFoodDetails, setSelectedFoodDetails }) {
    const [foodDetails, setFoodDetails] = useState({});
    const [portionAmount, setPortionAmount] = useState(foodDetails.servingSize);

    const handleNumberChange = (e) => {
        let input = e.target.value;
        if (input.length > 4) e.target.value = Math.floor(input / 10);
        setPortionAmount(input);
    };

    useEffect(() => {
        if (selectedFoodDetails) setFoodDetails(selectedFoodDetails);
    }, [selectedFoodDetails]);

    return (
        <>
            {Object.keys(foodDetails).length === 0 ? (
                <p>Loading...</p>
            ) : (
                <main id='food-page'>
                    <FoodInfoSection foodDetails={foodDetails} />
                    <div id='portion-container'>
                        <label htmlFor='portion' id='portion-label'>
                            <b>Portion:</b>
                        </label>
                        <div id='portion-input-container'>
                            <input
                                type='number'
                                name='portion'
                                id='portion-input'
                                defaultValue={100} //foodDetails.servingSize || foodDetails.foodPortions[0].gramWeight
                                min={0}
                                max={9999}
                                onChange={(e) => handleNumberChange(e)}
                            />
                            <p>{foodDetails.servingSizeUnit || 'g'}</p>
                        </div>
                    </div>
                    <FoodNutrientSection foodDetails={foodDetails} portionAmount={portionAmount} />
                </main>
            )}
        </>
    );
}
