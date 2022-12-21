import { useState } from 'react';
import './App.css';
import Search from './Search';
import FoodListPage from './FoodListPage';
import FoodPage from './FoodPage';

function App() {
    const [food, setFood] = useState('');
    const [foodIsSelected, setFoodIsSelected] = useState(false);

    return (
        <>
            <Search
                food={food}
                setFood={setFood}
                foodIsSelected={foodIsSelected}
                setFoodIsSelected={setFoodIsSelected}
            />
            {foodIsSelected ? (
                <FoodPage />
            ) : (
                <FoodListPage
                    foodIsSelected={foodIsSelected}
                    setFoodIsSelected={setFoodIsSelected}
                />
            )}
        </>
    );
}

export default App;
