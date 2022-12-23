import { useState, useEffect } from 'react';
import './FoodPage.css';

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
                    <h1>{foodDetails.description}</h1>
                    <section id='food-info-section'>
                        <div id='food-info-container-1'>
                            <div id='food-category-container'>
                                <p id='food-category-title'>
                                    <b>Food Category:</b>
                                </p>
                                <p id='food-category'>
                                    {foodDetails.brandedFoodCategory ||
                                        (function (category) {
                                            if (category) {
                                                return foodDetails
                                                    .wweiaFoodCategory
                                                    .wweiaFoodCategoryDescription;
                                            }
                                        })(foodDetails.wweiaFoodCategory) ||
                                        foodDetails.foodCategory.description ||
                                        'unknown'}
                                </p>
                            </div>
                            <div id='food-brand-owner-container'>
                                <p id='food-brand-owner-title'>
                                    <b>Brand Owner:</b>
                                </p>
                                <p id='food-brand-owner'>
                                    {foodDetails.brandOwner || 'unknown'}
                                </p>
                            </div>
                            <div id='food-serving-size-container'>
                                <p id='food-serving-size'>
                                    <b>Serving Size:</b>
                                </p>
                                <p id='food-serving-size'>
                                    {foodDetails.servingSize || 'unknown'}
                                    {foodDetails.servingSizeUnit || ''}
                                </p>
                            </div>
                        </div>
                        <div id='food-info-container-2'>
                            <p id='food-ingredients-title'>
                                <b>Ingredients:</b>
                            </p>
                            <p id='food-ingredients'>
                                {foodDetails.ingredients || 'unknown'}
                            </p>
                        </div>
                    </section>
                    <div id='portion-container'>
                        <label htmlFor='portion'>
                            <b>Portion:</b>
                        </label>
                        <input
                            type='number'
                            name='portion'
                            id='portion-input'
                            defaultValue={foodDetails.servingSize || 100}
                            min={0}
                            max={9999}
                            onChange={(e) => handleNumberChange(e)}
                        />
                        <p>{foodDetails.servingSizeUnit || ''}</p>
                    </div>
                </main>
            )}
        </>
    );
}
