import './Search.css';

export default function Search({
    food,
    setFood,
    setFoodList,
    fetchFoodList,
    foodIsSelected,
    setFoodIsSelected,
    setSelectedFoodDetails,
}) {
    function handleFetchFood(e) {
        //prevents form from refreshing the page
        e.preventDefault();
        //prevents previous FoodPage from temporarily loading before current FoodPage loads
        setSelectedFoodDetails({});
        //prevents previous foodListPage from temporarily loading before current foodListPage loads
        setFoodList([]);
        fetchFoodList(food, setFoodList);
        if (foodIsSelected) setFoodIsSelected(!foodIsSelected);
    }

    return (
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
                            setFood(e.target.value);
                        }}
                    />
                    <button id='search-btn' aria-label='Search'></button>
                </div>
            </form>
        </div>
    );
}
