import { useState } from 'react';
// import reactLogo from './assets/react.svg'
import './App.css';
import Search from './Search';

function App() {
    const [foodList, setFoodList] = useState([]);
    const [food, setFood] = useState('');

    return (
        <>
            <Search
                food={food}
                setFood={setFood}
                foodList={foodList}
                setFoodList={setFoodList}
            />
            {/* {food && <FoodPage />}
            {foodList && <FoodListPage />} */}
        </>
    );
}

export default App;
