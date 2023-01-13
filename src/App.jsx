import { useState, useEffect } from 'react';
import Search from './Search/Search';
import FoodListPage from './FoodListPage/FoodListPage';
import FoodPage from './FoodPage/FoodPage';
import { fetchFoodList } from './helperFunctions/fetch';
import ThemeButton from './ThemeButton/ThemeButton';
import './header.css';

function App() {
    const [food, setFood] = useState('blueberries');
    const [foodList, setFoodList] = useState([]);
    const [foodIsSelected, setFoodIsSelected] = useState(false);
    const [selectedFoodDetails, setSelectedFoodDetails] = useState({});

    // Loads default food list on initial render
    useEffect(() => {
        fetchFoodList('', setFoodList);
    }, []);

    return (
        <>
            <header>
                <div id='header-content'>
                    <div id='page-title-container'>
                        <div id='site-icon'></div>
                        <h1 id='page-title'>NutriSearch</h1>
                    </div>
                    <Search
                        food={food}
                        setFood={setFood}
                        setFoodList={setFoodList}
                        fetchFoodList={fetchFoodList}
                        foodIsSelected={foodIsSelected}
                        setFoodIsSelected={setFoodIsSelected}
                        setSelectedFoodDetails={setSelectedFoodDetails}
                    />
                    <div id='theme-button-container'>
                        <ThemeButton />
                    </div>
                </div>
            </header>
            {foodIsSelected ? (
                <FoodPage
                    selectedFoodDetails={selectedFoodDetails}
                    setFoodIsSelected={setFoodIsSelected}
                />
            ) : (
                <>
                    {foodList.length == 0 && (
                        <div className='loader-wrapper'>
                            <p className='loader'></p>
                        </div>
                    )}
                    {foodList.length != 0 && (
                        <FoodListPage
                            foodList={foodList}
                            foodIsSelected={foodIsSelected}
                            setFoodIsSelected={setFoodIsSelected}
                            setSelectedFoodDetails={setSelectedFoodDetails}
                        />
                    )}
                </>
            )}
        </>
    );
}

export default App;
