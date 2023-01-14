import { useState, useEffect } from 'react';
import './FoodPage.css';
import InfoSection from './InfoSection';
import NutrientSection from './NutrientSection';

export default function FoodPage({ selectedFoodDetails, setFoodIsSelected }) {
    const [foodDetails, setFoodDetails] = useState({});
    const [portionAmount, setPortionAmount] = useState(selectedFoodDetails.servingSize);

    const handleNumberChange = (e) => {
        let input = e.target.value;
        if (input.length > 4) e.target.value = Math.floor(input / 10);
        setPortionAmount(e.target.value);
    };

    const returnToFoodList = () => {
        setFoodIsSelected(false);
    };

    useEffect(() => {
        if (selectedFoodDetails) setFoodDetails(selectedFoodDetails);
    }, [selectedFoodDetails]);

    return (
        <>
            {Object.keys(foodDetails).length === 0 ? (
                <div className='loader-wrapper'>
                    <p className='loader'></p>
                </div>
            ) : (
                <>
                    <div id='back-button-wrapper'>
                        <button id='back-button' onClick={returnToFoodList}>
                            Back
                        </button>
                    </div>
                    <main id='food-page'>
                        <h1 id='food-description'>{foodDetails.description}</h1>
                        <InfoSection foodDetails={foodDetails} />
                        <div id='portion-container'>
                            <label htmlFor='portion' id='portion-label'>
                                <b>Portion:</b>
                            </label>
                            <div id='portion-input-container'>
                                <input
                                    type='number'
                                    name='portion'
                                    id='portion-input'
                                    defaultValue={foodDetails.servingSize || 100} //foodDetails.servingSize || foodDetails.foodPortions[0].gramWeight
                                    min={0}
                                    max={9999}
                                    onChange={(e) => handleNumberChange(e)}
                                />
                                <p>{foodDetails.servingSizeUnit || 'g'}</p>
                            </div>
                        </div>
                        <NutrientSection foodDetails={foodDetails} portionAmount={portionAmount} />
                    </main>
                </>
            )}
        </>
    );
}
