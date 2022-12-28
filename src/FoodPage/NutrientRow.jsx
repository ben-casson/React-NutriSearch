import './NutrientRow.css';

export default function NutrientRow({ name, amount, dailyValue, background, nested }) {
    return (
        <div className={'nutrient-row' + (background == 'dark' ? ' dark-background' : '')}>
            <p className={'nutrient-name' + (nested == 'nested' ? ' nested' : '')}>{name}</p>
            <p className='nutrient-amount'>{amount}</p>
            <p className='nutrient-daily-value'>{dailyValue}</p>
        </div>
    );
}
