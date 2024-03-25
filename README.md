Calculator App

The Calculator App is a simple yet functional calculator built using React. It allows users to perform basic arithmetic calculations such as addition, subtraction, multiplication, and division. The calculator also supports percentage calculations and changing the sign of numbers. The app provides a clean interface with buttons for input and displays the result in real-time.


Features

Addition, subtraction, multiplication, and division operations.
Percentage calculation.
Toggle sign (+/-) for changing the sign of numbers.
Clear (AC) button to reset the input.
Real-time display of input and result.


Technologies Used

React
math.js (for mathematical evaluation)
HTML
CSS
Tailwind CSS


Components

App.js
The main component of the Calculator App. It manages the state of the input text, result, and performs calculations using the math.js library. The calculate function evaluates the input expression, updates the result, and clears the input. The addText function appends the clicked button value to the input text. The clear function resets the input and result. The toggleSign function changes the sign of the input number.

Button.js
Component for rendering calculator buttons. It takes props such as value (the button's text), bgColor, color, and handleClick (the function to handle button clicks). Each button is styled based on the provided bgColor and color props.

Input.js
Component for displaying the input and result of calculations. It takes props text and result to display the combined text and result in the calculator display area.


How to Use

Open the Calculator App in a web browser.
Input numbers and perform operations by clicking the corresponding buttons.
To add numbers, click the number buttons (0-9).
To perform operations, click the corresponding operator buttons (+, -, *, /).
To calculate the result, click the "=" button.
To clear the input, click the "AC" button.
To toggle the sign of a number, click the "+/-" button.
To calculate a percentage, input the number followed by the "%" button.
The input and result are displayed in real-time in the calculator display area.


Additional Notes

The Calculator App uses the math.js library for evaluating mathematical expressions.
Buttons are styled using CSS to provide visual feedback to users.
The App provides a responsive design, making it suitable for various screen sizes.


Available Scripts

App.js: The main component managing state and rendering the calculator.
Button.js: Component for rendering calculator buttons with custom styling.
Input.js: Component for displaying the input and result.
button.css: Contains styles for the calculator buttons.
input.css: Contains styles for the calculator input display.


Usage

The Calculator App is designed for quick and simple arithmetic calculations. Users can perform basic operations, clear input, toggle sign, and see results in real-time. It's a handy tool for everyday calculations.


Enjoy using the Calculator App for your arithmetic needs!
