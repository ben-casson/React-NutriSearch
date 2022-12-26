import { useState, useEffect } from 'react';
import './FoodPage.css';
import FoodInfoSection from './FoodInfoSection';
import FoodNutrientSection from './FoodNutrientSection';

export default function FoodPage({
    foodIsSelected,
    selectedFoodDetails,
    setSelectedFoodDetails,
}) {
    const [foodDetails, setFoodDetails] = useState({});

    const handleNumberChange = (e) => {
        if (e.target.value.length > 4) {
            e.target.value = Math.floor(e.target.value / 10);
        }
        console.log(e.target.value);
    };

    useEffect(() => {
        if (selectedFoodDetails) setFoodDetails(selectedFoodDetails);
    }, [selectedFoodDetails]);

    return (
        <>
            {Object.keys(foodDetails).length === 0 ? (
                <p>Loading...</p>
            ) : (
                <main>
                    <FoodInfoSection foodDetails={foodDetails} />
                    <div id='portion-container'>
                        <label htmlFor='portion' id='portion-label'>
                            <b>Portion:</b>
                        </label>
                        <input
                            type='number'
                            name='portion'
                            id='portion-input'
                            defaultValue={100} //foodDetails.servingSize
                            min={0}
                            max={9999}
                            onChange={(e) => handleNumberChange(e)}
                        />
                        <p>{foodDetails.servingSizeUnit || 'g'}</p>
                    </div>
                    <FoodNutrientSection foodDetails={foodDetails} />
                </main>
            )}
        </>
    );
}
