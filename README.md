<img src="https://github.com/danielcintori/Password/blob/main/exemple%20screen.png">
Link: https://password-generator-vanilla-css.netlify.app

## Password Generator Web App

This is a simple JavaScript web application that generates and displays random passwords. Users can click a button to generate a new password, and they can click on the displayed password to copy it to their clipboard. Below is a brief description of the key components and how to use this application.

## Getting Started

1. Clone or download this repository to your local machine.

2. Open the `index.html` file in a web browser to use the application.

## Features

- Password Generation: Click the "Generate Password" button to create a random password.

- Password Copying: Click on the displayed password to copy it to your clipboard.

## How It Works

The application uses the following JavaScript libraries and technologies:

- [nanoid](https://github.com/ai/nanoid): This library is used to generate random passwords.

- [clipboard-copy](https://github.com/sindresorhus/clipboard-copy): This library is used to copy the password to the clipboard.

## Code Structure

- `index.html`: The HTML file containing the structure of the web page.

- `style.css`: The CSS file for styling the web page.

- `app.js`: The JavaScript code for generating and managing passwords.

## Code Explanation

1. **Import Dependencies**: We import the `nanoid` library for generating random passwords and the `clipboard-copy` library for copying passwords to the clipboard.

2. **Generate a Test Password**: A test password is generated and logged in the console to ensure that the libraries are working correctly.

3. **Event Listeners**:
   - When the "Generate Password" button is clicked, a random password is generated and displayed in the `<h2>` element.
   - When the displayed password is clicked, it is copied to the clipboard, and an alert notifies the user.

## License

This project is licensed under the [MIT License](LICENSE).

## Author

- danielcintori

## Acknowledgments

- Thanks to the creators of the `nanoid` and `clipboard-copy` libraries for making this project possible.

## Support or Contact

If you have any questions or encounter issues while using this application, please contact [your email address].

Feel free to modify and enhance this application according to your needs. Enjoy generating and copying random passwords!
