export function calculateNutrientAmount(portionQuantity, nutrientModel, key) {
    let amount = portionQuantity
        ? Math.round(nutrientModel.get(`${key}`).amount * portionQuantity) / 100
        : nutrientModel.get(`${key}`).amount;

    let unit = nutrientModel.get(`${key}`).unit;

    return (amount >= 0 ? amount + ' ' + unit : '-');
}

export function calculateNutrientDailyValue(portionQuantity, nutrientModel, key) {
    let dailyValue = portionQuantity
        ? Math.round(
              (nutrientModel.get(`${key}`).amount * portionQuantity * 10) /
                  nutrientModel.get(`${key}`).dailyValue
          ) / 10
        : Math.round(
              (nutrientModel.get(`${key}`).amount / nutrientModel.get(`${key}`).dailyValue) * 1000
          ) / 10;

    return (dailyValue >= 0  && dailyValue != Infinity) ? dailyValue + '%' : '-';
}
