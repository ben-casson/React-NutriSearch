import { useState, useEffect } from 'react';
// import fetchFood from './api/fetchFoodList.js';
// import { foodResults } from './api/fetchFoodList';
import './Search.css';

export default function Search({
    food,
    setFood,
    foodList,
    setFoodList,
    foodIsSelected,
    setFoodIsSelected,
    fetchFoodList,
    setSelectedFoodDetails,
}) {

    const [currentInput, setCurrentInput] = useState('')

    function handleFetchFood(e) {
        //prevents form from refreshing the page
        e.preventDefault();
        //prevents previous FoodPage from temporarily loading before current FoodPage loads
        setSelectedFoodDetails({});
        //prevents previous foodListPage from temporarily loading before current foodListPage loads
        //  and doesn't fetch new data if user's current input is the same as that of the previous search 
        if (currentInput != food) setFoodList([]);
        if (foodIsSelected) setFoodIsSelected(!foodIsSelected);
        fetchFoodList(food);
    }

    return (
        <header>
            <div id='search-form-container'>
                <form onSubmit={handleFetchFood}>
                    <label htmlFor='food-input' id='food-input-label'></label>
                    <div id='search-bar-and-btn-container'>
                        <input
                            type='text'
                            value={food}
                            placeholder='Search by food name...'
                            id='food-input'
                            onChange={(e) => {
                                setCurrentInput(e.target.value);
                                setFood(e.target.value);
                            }}
                        />
                        <button id='search-btn'></button>
                    </div>
                </form>
            </div>
        </header>
    );
}
