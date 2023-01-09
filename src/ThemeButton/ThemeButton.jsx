import './ThemeButton.css';

export default function ThemeButton() {
    function toggleTheme() {
        if (document.body.className === 'dark') {
            document.body.className = 'light';
            document.querySelector('#theme-button').className = 'dark';
            document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]').setAttribute("content", "white");
        } else {
            document.body.className = 'dark';
            document.querySelector('#theme-button').className = 'light';
            document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]').setAttribute("content", `"#111827"`);
        }
    }

    return <button id='theme-button' className='dark' onClick={toggleTheme}></button>;
}
