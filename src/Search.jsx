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
}) {
    function handleFetchFood(e) {
        //prevents form from refreshing the page
        e.preventDefault();
        fetchFoodList(food);
        if (foodIsSelected) {
            setFoodIsSelected(!foodIsSelected);
        }
    }

    return (
        <header>
            <div id='search-form-container'>
                <form onSubmit={handleFetchFood}>
                    <label htmlFor='food-input'>Search</label>
                    <div id='search-bar-and-btn-container'>
                        <input
                            type='text'
                            value={food}
                            placeholder="apple"
                            id='food-input'
                            onChange={(e) => setFood(e.target.value)}
                        />
                        <button id='search-btn'></button>
                    </div>
                </form>
            </div>
        </header>
    );
}
