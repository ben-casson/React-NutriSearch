import { useState, useEffect } from 'react';
import './App.css';
import Search from './Search';
import FoodListPage from './FoodListPage';
import FoodPage from './FoodPage/FoodPage';

function App() {
    const [food, setFood] = useState('');
    const [foodList, setFoodList] = useState([]);
    const [foodIsSelected, setFoodIsSelected] = useState(false);
    const [selectedFoodDetails, setSelectedFoodDetails] = useState({});

    function fetchFoodList(foodItem) {
        let tempFoodInput = foodItem + '';
        if (tempFoodInput.trim() === '') {
            tempFoodInput = 'apple';
        }
        fetch(
            `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=lWLhwUp3ZfGng76exaxb8ddTvr5SlfSs9G8wk3b9&query=${tempFoodInput}`
        )
            .then((response) => response.json())
            .then((foodResults) => {
                // console.log(foodResults);
                setFoodList([...foodResults.foods]);
                // console.log(foodList);
            })
            .catch((error) => {
                console.error(`An error occurred: ${error}`);
            });
    }

    function fetchFood(id) {
        fetch(
            `https://api.nal.usda.gov/fdc/v1/food/${id}?api_key=lWLhwUp3ZfGng76exaxb8ddTvr5SlfSs9G8wk3b9`
        )
            .then((response) => response.json())
            .then((foodResults) => {
                console.log(foodResults);
                setSelectedFoodDetails(foodResults);
                console.log(selectedFoodDetails);
            })
            .catch((error) => {
                console.error(`An error occurred: ${error}`);
            });
    }

    // Loads default food list on initial render
    useEffect(() => {
        fetchFoodList('');
    }, []);

    return (
        <>
            <>
                <Search
                    food={food}
                    setFood={setFood}
                    foodList={foodList}
                    setFoodList={setFoodList}
                    fetchFoodList={fetchFoodList}
                    foodIsSelected={foodIsSelected}
                    setFoodIsSelected={setFoodIsSelected}
                    setSelectedFoodDetails={setSelectedFoodDetails}
                />
                {foodIsSelected ? (
                    <FoodPage
                        foodIsSelected={foodIsSelected}
                        selectedFoodDetails={selectedFoodDetails}
                        setSelectedFoodDetails={setSelectedFoodDetails}
                    />
                ) : (
                    <>
                        {foodList.length == 0 && <p id='loading'>Loading...</p>}
                        {foodList.length != 0 && (
                            <FoodListPage
                                food={food}
                                foodList={foodList}
                                fetchFood={fetchFood}
                                setFoodList={setFoodList}
                                foodIsSelected={foodIsSelected}
                                setFoodIsSelected={setFoodIsSelected}
                            />
                        )}
                    </>
                )}
            </>
        </>
    );
}

export default App;
