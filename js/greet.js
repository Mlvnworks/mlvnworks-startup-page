const greet = document.querySelector('#greet');
const inquirer = document.querySelector('#inquirer');

const hour = new Date().getHours();

const greetText = () => {
    return hour >= 12 && hour <= 18 ? 'Good Afternoon' : hour > 18 && hour <= 24 ? 'Good evening' : 'Good Morning';
};

greet.textContent = greetText();

switch (greetText()) {
    case 'Good Morning':
        inquirer.textContent = `Start your day with a cup of coffee.`;
        break;
    case 'Good Afternoon':
        inquirer.textContent = `Congrats you survived half through this day.`;
        break;
    case 'Good evening':
        inquirer.textContent = `Mistake today doesn't define tomorow, have a goodnight.`;
        break;
}
