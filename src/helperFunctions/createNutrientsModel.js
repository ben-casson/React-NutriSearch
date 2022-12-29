function createNutrientObject(
    nutrientArray,
    tempNutrientModel,
    nutrientNameFromAPI,
    type,
    unit,
    dailyValue
) {
    const tempNutrientObj = {};
    for (let nutrientObj of nutrientArray) {
        if (
            nutrientObj.nutrient.name == nutrientNameFromAPI &&
            nutrientObj.nutrient.unitName == unit
        ) {
            tempNutrientObj.type = type;
            tempNutrientObj.amount = nutrientObj.amount;
            tempNutrientObj.dailyValue = dailyValue;
            tempNutrientObj.unit = unit;
            break;
        } else {
            tempNutrientObj.type = type;
            tempNutrientObj.amount = '-';
            tempNutrientObj.dailyValue = '-';
            tempNutrientObj.unit = unit;
        }
    }
    let keyName = type;
    tempNutrientModel.set(keyName, tempNutrientObj);
}

export function createNutrientsModel(nutrientArray) {
    const tempNutrientModel = new Map();
    // General
    createNutrientObject(nutrientArray, tempNutrientModel, 'Energy', 'Energy', 'kcal', 2000);
    createNutrientObject(nutrientArray, tempNutrientModel, 'Water', 'Water', 'g', 3500);
    createNutrientObject(nutrientArray, tempNutrientModel, 'Caffeine', 'Caffeine', 'mg', 0);
    createNutrientObject(nutrientArray, tempNutrientModel, 'Alcohol, ethyl', 'Alcohol', 'g', 0);
    //Carbs
    createNutrientObject(nutrientArray, tempNutrientModel, 'Carbohydrate, by difference', 'Carbs', 'g', 275);
    createNutrientObject(nutrientArray, tempNutrientModel, 'Sugars, total including NLEA', 'Sugars', 'g', 0);
    createNutrientObject(nutrientArray, tempNutrientModel, 'Sugars, added', 'Added Sugars', 'g', 50);
    createNutrientObject(nutrientArray, tempNutrientModel, 'Fiber, total dietary', 'Fiber', 'g', 28);
    //Lipids
    createNutrientObject(nutrientArray, tempNutrientModel, 'Total lipid (fat)', 'Fat', 'g', 78);
    createNutrientObject(nutrientArray, tempNutrientModel, 'Fatty acids, total monounsaturated', 'Monounsaturated', 'g', 40);
    createNutrientObject(nutrientArray, tempNutrientModel, 'Fatty acids, total polyunsaturated', 'Polyunsaturated', 'g', 15);
    createNutrientObject(nutrientArray, tempNutrientModel, 'Fatty acids, total saturated', 'Saturated', 'g', 22);
    createNutrientObject(nutrientArray, tempNutrientModel, 'Fatty acids, total trans', 'Trans-Fats', 'g', 0);
    createNutrientObject(nutrientArray, tempNutrientModel, 'Cholesterol', 'Cholesterol', 'mg', 300);
    //Protein
    createNutrientObject(nutrientArray, tempNutrientModel, 'Protein', 'Protein', 'g', 50);
    //Vitamins
    createNutrientObject(nutrientArray, tempNutrientModel, 'Thiamin', 'B1 (Thiamin)', 'mg', 1.2);
    createNutrientObject(nutrientArray, tempNutrientModel, 'Riboflavin', 'B2 (Riboflavin)', 'mg', 1.3);
    createNutrientObject(nutrientArray, tempNutrientModel, 'Niacin', 'B3 (Niacin)', 'mg', 16);
    createNutrientObject(nutrientArray, tempNutrientModel, 'Pantothenic acid', 'B5 (Pantothenic Acid)', 'mg', 5);
    createNutrientObject(nutrientArray, tempNutrientModel, 'Vitamin B-6', 'B6 (Pyridoxine)', 'mg', 1.4);
    createNutrientObject(nutrientArray, tempNutrientModel, 'Vitamin B-12', 'B12 (Cobalamin)', 'µg', 2.4);
    createNutrientObject(nutrientArray, tempNutrientModel, 'Folate, total', 'Folate', 'µg', 400);
    createNutrientObject(nutrientArray, tempNutrientModel, 'Vitamin A, RAE', 'Vitamin A', 'µg', 800);
    createNutrientObject(nutrientArray, tempNutrientModel, 'Vitamin C, total ascorbic acid', 'Vitamin C', 'mg', 90);
    return tempNutrientModel;
}
