import { useState, useEffect } from 'react';
import Search from './Search/Search';
import FoodListPage from './FoodListPage/FoodListPage';
import FoodPage from './FoodPage/FoodPage';
import { fetchFoodList } from './helperFunctions/fetch';

function App() {
    const [food, setFood] = useState('');
    const [foodList, setFoodList] = useState([]);
    const [foodIsSelected, setFoodIsSelected] = useState(false);
    const [selectedFoodDetails, setSelectedFoodDetails] = useState({});

    // Loads default food list on initial render
    useEffect(() => {
        fetchFoodList('', setFoodList);
    }, []);

    return (
        <>
            <Search
                food={food}
                setFood={setFood}
                setFoodList={setFoodList}
                fetchFoodList={fetchFoodList}
                foodIsSelected={foodIsSelected}
                setFoodIsSelected={setFoodIsSelected}
                setSelectedFoodDetails={setSelectedFoodDetails}
            />
            {foodIsSelected ? (
                <FoodPage selectedFoodDetails={selectedFoodDetails} />
            ) : (
                <>
                    {foodList.length == 0 && <p className='loading'>Loading...</p>}
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
