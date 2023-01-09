import { useEffect, useState } from 'react';
import './FoodListPage.css';
import { fetchFood } from '../helperFunctions/fetch';

export default function FoodListPage({
    foodIsSelected,
    setFoodIsSelected,
    foodList,
    setSelectedFoodDetails,
}) {
    const [foodListArray, setFoodListArray] = useState([]);

    function loadFoodPage(id) {
        fetchFood(id, setSelectedFoodDetails);
        if (!foodIsSelected) setFoodIsSelected(!foodIsSelected);
    }

    const createFoodRow = (element, i) => {
        return (
            <>
                <div className='description-wrapper'>
                    <button key={element.fdcId} onClick={() => loadFoodPage(element.fdcId)}>
                        {element.description}
                    </button>
                </div>
                <div className='food-brand-wrapper'>
                    <p>{element.brandName || element.foodClass || '-'}</p>
                </div>
                <div className='food-brand-owner-wrapper'>
                    <p>{element.brandOwner || '-'}</p>
                </div>
                <div className='food-category-wrapper'>
                    <p>{element.foodCategory}</p>
                </div>
            </>
        );
    };

    useEffect(() => {
        if (foodList.length > 0) setFoodListArray([...foodList]);
    }, [foodList]);

    return (
        <main id='food-list-main'>
            {foodListArray.length != 0 && (
                <>
                    <div id='food-list-header'>
                        <div id='food-list-description-header'>
                            <p id='description-title'>
                                <b>Description</b>
                            </p>
                        </div>
                        <div id='food-list-brand-header'>
                            <p>
                                <b>Brand</b>
                            </p>
                        </div>
                        <div id='food-list-brand-owner-header'>
                            <p>
                                <b>Brand Owner</b>
                            </p>
                        </div>
                        <div id='food-list-category-header'>
                            <p>
                                <b>Food Category</b>
                            </p>
                        </div>
                    </div>
                    {foodListArray.map((element, i) =>
                        i % 2 == 0 ? (
                            <div className='food-row dark-background' key={i}>
                                {createFoodRow(element, i)}
                            </div>
                        ) : (
                            <div className='food-row' key={i}>
                                {createFoodRow(element, i)}
                            </div>
                        )
                    )}
                </>
            )}
        </main>
    );
}
