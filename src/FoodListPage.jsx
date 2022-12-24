import { useEffect, useState } from 'react';
import './FoodListPage.css';

export default function FoodListPage({
    food,
    foodIsSelected,
    setFoodIsSelected,
    foodList,
    fetchFood,
}) {
    const [arr, setArr] = useState([]);

    //
    function loadFoodPage(id) {
        fetchFood(id);
        if (!foodIsSelected) setFoodIsSelected(!foodIsSelected);
    }

    const createFoodRow = (element, i) => {
        return (
            <>
                <div className='description-wrapper'>
                    <button
                        key={element.fdcId}
                        onClick={() => loadFoodPage(element.fdcId)}
                    >
                        {element.description}
                    </button>
                </div>
                <div className='food-brand-wrapper'>
                    <p>
                        {element.brandName ||
                            element.foodClass || 'unknown'}
                    </p>
                </div>
                <div className='food-brand-owner-wrapper'>
                    <p>{element.brandOwner || 'unknown'}</p>
                </div>
                <div className='food-category-wrapper'>
                    <p>{element.foodCategory}</p>
                </div>
            </>
        );
    };

    useEffect(() => {
        if (foodList.length > 0) setArr([...foodList]);
    }, [foodList]);

    return (
        <main>
            {/* <button onClick={getFoods}>{food}</button> */}
            {arr.length != 0 && (
                <>
                    <div id='food-list-header'>
                        <div id='food-list-description-header'>
                            <p id='description-title'>
                                <b>Description</b>
                            </p>
                        </div>
                        <div id='food-list-category-header'>
                            <p>
                                <b>Food Category</b>
                            </p>
                        </div>
                    </div>
                    {arr.map((element, i) =>
                        // <p key={element.fdcId}>{element.description}</p>
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
