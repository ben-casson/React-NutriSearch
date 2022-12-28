import './NutrientRow.css';

export default function NutrientRow({ name, amount, dailyValue, background }) {
    return (
        <div className={'nutrient-row' + (background == 'dark' ? ' dark-background' : '')}>
            <p className='nutrient-name'>{name}</p>
            <p className='nutrient-amount'>{amount}</p>
            <p className='nutrient-daily-value'>{dailyValue}</p>
        </div>
    );
}
