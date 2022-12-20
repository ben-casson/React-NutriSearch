import './Search.css';

export default function Search({ food, setFood }) {
    function handleFetchFood(e) {
        //prevents form from refreshing the page
        e.preventDefault();
        fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=lWLhwUp3ZfGng76exaxb8ddTvr5SlfSs9G8wk3b9?query=${search}`)
            .then((response) => {
                response.json();
            })
            .then((foodData) => {
                console.log(foodData);
            })
            .catch((e) => {
                console.error(`An error occurred: ${e}`);
            });
    }

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
