import { useEffect } from 'react';
import fetchFood from './api/fetchFoodList.js';
import './Search.css';

export default function Search({ food, setFood }) {
    function handleFetchFood(e) {
        //prevents form from refreshing the page
        e.preventDefault();
        fetchFood(food);
    }

    // Loads default food list when no food item is entered
    useEffect(() => {
        // if (!food.trim()) fetchFood(food);
    });

    return (
        <header>
            <div id='search-wrapper'>
                <form onSubmit={handleFetchFood}>
                    <label htmlFor='food-input'>Your Food</label>
                    <input
                        type='text'
                        value={food}
                        id='food-input'
                        onChange={(e) => setFood(e.target.value)}
                    />
                    <button id='search-button'></button>
                </form>
            </div>
        </header>
    );
}
