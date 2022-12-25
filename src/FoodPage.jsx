import { useState, useEffect } from 'react';
import './FoodPage.css';
import NutrientRow from './NutrientRow';

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
                                <p
                                    id='food-category-title'
                                    className='food-info-title'
                                >
                                    Food Category:
                                </p>
                                <p id='food-category' className='food-info'>
                                    {foodDetails.brandedFoodCategory ||
                                        (function (category) {
                                            if (category) {
                                                return foodDetails
                                                    .wweiaFoodCategory
                                                    .wweiaFoodCategoryDescription;
                                            }
                                        })(foodDetails.wweiaFoodCategory) ||
                                        foodDetails.foodCategory.description ||
                                        <span className='unknown'>unknown</span>}
                                </p>
                            </div>
                            <div id='food-brand-name-container'>
                                <p
                                    id='food-brand-name-title'
                                    className='food-info-title'
                                >
                                    Brand Name:
                                </p>
                                <p id='food-brand-name' className='food-info'>
                                    {foodDetails.brandName || <span className='unknown'>unknown</span>}
                                </p>
                            </div>
                            <div id='food-brand-owner-container'>
                                <p
                                    id='food-brand-owner-title'
                                    className='food-info-title'
                                >
                                    Brand Owner:
                                </p>
                                <p id='food-brand-owner' className='food-info'>
                                    {foodDetails.brandOwner || <span className='unknown'>unknown</span>}
                                </p>
                            </div>
                            <div id='food-serving-size-container'>
                                <p
                                    id='food-serving-size-title'
                                    className='food-info-title'
                                >
                                    Serving Size:
                                </p>
                                <p id='food-serving-size' className='food-info'>
                                    {foodDetails.servingSize ||
                                        (foodDetails.foodPortions &&
                                            (function (amount) {
                                                if (amount) {
                                                    return (
                                                        amount +
                                                        ' ' +
                                                        foodDetails
                                                            .foodPortions[0]
                                                            .modifier +
                                                        ' (' +
                                                        foodDetails
                                                            .foodPortions[0]
                                                            .gramWeight +
                                                        'g)'
                                                    );
                                                } else {
                                                    foodDetails.foodPortions[0]
                                                        .portionDescription;
                                                }
                                            })(
                                                foodDetails.foodPortions[0]
                                                    .amount
                                            )) ||
                                        (foodDetails.foodPortions &&
                                            foodDetails.foodPortions.length !=
                                                0 &&
                                            (function (portions) {
                                                if (portions[0].amount) {
                                                    return (
                                                        portions[0].amount +
                                                        ' ' +
                                                        portions[0].modifier +
                                                        ' (' +
                                                        portions[0].gramWeight +
                                                        'g)'
                                                    );
                                                } else {
                                                    return portions[0]
                                                        .portionDescription;
                                                }
                                            })(foodDetails.foodPortions)) ||
                                            <span className='unknown'>unknown</span>}
                                    {foodDetails.servingSizeUnit || ''}
                                </p>
                            </div>
                        </div>
                        <div id='food-info-container-2'>
                            <p
                                id='food-ingredients-title'
                                className='food-info-title'
                            >
                                Ingredients:
                            </p>
                            <p id='food-ingredients' className='food-info'>
                                {foodDetails.ingredients ||
                                    (foodDetails.inputFoods &&
                                        foodDetails.inputFoods.length != 0 &&
                                        foodDetails.inputFoods[0]
                                            .ingredientDescription) ||
                                            <span className='unknown'>'unknown'</span>}
                            </p>
                        </div>
                    </section>
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
                    <section id='food-nutrients-table-section'>
                        <div id='food-nutrients-table-title-container'>
                            <p id='food-nutrients-title-name'>Name</p>
                            <p id='food-nutrients-title-amount'>Amount</p>
                            <p id='food-nutrients-title-daily-value'>
                                % Daily Value
                            </p>
                        </div>
                        <div id='food-nutrients-table-content-container'>
                            {Object.keys(foodDetails).length != 0 && (
                                <NutrientRow
                                    nutrientsArray={foodDetails.foodNutrients}
                                />
                            )}
                        </div>
                    </section>
                </main>
            )}
        </>
    );
}
