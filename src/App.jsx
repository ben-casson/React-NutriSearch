import { useState, useEffect } from 'react';
import './App.css';
import Search from './Search';
import FoodListPage from './FoodListPage';
import FoodPage from './FoodPage';

function App() {
    const [food, setFood] = useState('');
    const [foodList, setFoodList] = useState([]);
    const [foodIsSelected, setFoodIsSelected] = useState(false);

    function fetchFood(foodItem) {
        fetch(
            `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=lWLhwUp3ZfGng76exaxb8ddTvr5SlfSs9G8wk3b9&query=${foodItem}`
        )
            .then((response) => response.json())
            .then((foodResults) => {
                console.log(foodResults);
                setFoodList([...foodResults.foods])
                console.log(foodList);
            })
            .catch((error) => {
                console.error(`An error occurred: ${error}`);
            });
    }

    // Loads default food list on initial render
    useEffect(() => {
        fetchFood(food);
    }, []);

    return (
        <>
            <Search
                food={food}
                setFood={setFood}
                foodList={foodList}
                setFoodList={setFoodList}
                foodIsSelected={foodIsSelected}
                setFoodIsSelected={setFoodIsSelected}
                fetchFood={fetchFood}
            />
            {foodIsSelected ? (
                <FoodPage />
            ) : (
                <FoodListPage
                    food={food}
                    foodIsSelected={foodIsSelected}
                    setFoodIsSelected={setFoodIsSelected}
                    foodList={foodList}
                    setFoodList={setFoodList}
                />
            )}
        </>
    );
}

export default App;
