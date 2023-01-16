import { useState, useEffect } from 'react';
import './FoodPage.css';
import InfoSection from './InfoSection';
import NutrientSection from './NutrientSection';

export default function FoodPage({ selectedFoodDetails, setFoodIsSelected }) {
    const [foodDetails, setFoodDetails] = useState({});
    const [portionAmount, setPortionAmount] = useState(selectedFoodDetails.servingSize);

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
                        <div id='food-info-section-container'>
                            <h1 id='food-description'>{foodDetails.description}</h1>
                            <InfoSection foodDetails={foodDetails} setPortionAmount={setPortionAmount} />
                        </div>
                        {/* <div id='portion-container'>
                            <label htmlFor='portion' id='portion-label'>
                                <b>Portion:</b>
                            </label>
                            <div id='portion-input-container'>
                                <input
                                    type='number'
                                    name='portion'
                                    id='portion-input'
                                    defaultValue={foodDetails.servingSize || 100}
                                    min={0}
                                    max={9999}
                                    onChange={(e) => handleNumberChange(e)}
                                />
                                <p>{foodDetails.servingSizeUnit || 'g'}</p>
                            </div>
                        </div> */}
                        <NutrientSection foodDetails={foodDetails} portionAmount={portionAmount} />
                    </main>
                </>
            )}
        </>
    );
}
