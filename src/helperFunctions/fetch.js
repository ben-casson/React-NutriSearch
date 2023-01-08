export function fetchFoodList(foodItem, setState) {
    let tempFoodInput = foodItem + '';
    if (tempFoodInput.trim() === '') {
        tempFoodInput = 'apple';
    }
    //fetch using express proxy server to avoid leaking API key in client
    fetch(`https://nutrisearch-api-proxy-server.onrender.com/food-list?query=${tempFoodInput}`)
        .then((response) => {
            if (!response.ok) {
                switch (response.status) {
                    case 400:
                        console.log('400 Bad Request');
                        break;
                    case 401:
                        console.log('401 Unauthorized');
                        break;
                    case 404:
                        console.log('404 Not Found');
                        break;
                    case 500:
                        console.log('500 Internal Server Error');
                        break;
                }
            }
            return response.json();
        })
        .then((foodResults) => {
            console.log(foodResults.foods);
            setState([...foodResults.foods]);
        })
        .catch((error) => {
            console.error(`An error occurred: ${error}`);
        });
}

export function fetchFood(id, setState) {
    //fetch using express proxy server to avoid leaking API key in client
    fetch(`https://nutrisearch-api-proxy-server.onrender.com/food-item/${id}`)
        .then((response) => {
            if (!response.ok) {
                switch (response.status) {
                    case 400:
                        console.log('400 Bad Request');
                        break;
                    case 401:
                        console.log('401 Unauthorized');
                        break;
                    case 404:
                        console.log('404 Not Found');
                        break;
                    case 500:
                        console.log('500 Internal Server Error');
                        break;
                }
            }
            return response.json();
        })
        .then((foodResults) => {
            console.log(foodResults);
            setState(foodResults);
        })
        .catch((error) => {
            console.error(`An error occurred: ${error}`);
        });
}
