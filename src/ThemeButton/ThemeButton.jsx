import './ThemeButton.css';

export default function ThemeButton() {
    function toggleTheme() {
        if (document.body.className === 'dark') {
            document.body.className = 'light';
            document.querySelector('#theme-button').className = 'dark';
        } else {
            document.body.className = 'dark';
            document.querySelector('#theme-button').className = 'light';
        }
    }

    return <button id='theme-button' className='dark' onClick={toggleTheme}></button>;
}
