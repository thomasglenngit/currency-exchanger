
# _Currency Converter_

#### _An application for converting currencies , July 3rd, 2020_

#### By _**Thomas Glenn**_

## Description

_._

| Spec   |    Input    |  Output | Completed |
|:----------|:-------------|:------| :-------- |
| The program should take in a US dollar amount from the user | "500" | no out put | passed |
| The program should take in a foreign currency ISO from the user | "EUR" (Euros) | no output |  passed  |
| The program should convert the input currency amount into the requested currency | "500 USD"  |  "443 Euros" |   Passed |


## Setup/Installation Requirements

- Opening the file:
- In your web browser, navigate to https://github.com/thomasglenngit/currencyExchanger.
- Click the green "Clone or download" button at the right of the screen.
- Select "Download ZIP."
- Move "currencyExchanger" folder onto your desktop.
- Open the currencyExchanger folder.
- Open your computer's terminal.
- After the prompt ($) type: "cd currencyExchanger"
- Once in the currencyExchanger directory, type: npm install and press "Enter.
- Enter the command "$ npm run build" in the terminal and press "Enter".
- Enter the command "$ npm run start" in the terminal and press "Enter".
- The program should open and run with its user interface accessible in your default web browser.

Obtaining an API Key:
- Create a .env folder in your currencyExchange file. 
- Navigate via your web browser to: https://www.exchangerate-api.com/
- Enter your email address in the entry field on the main page.
- Press the button that says, "Generate a key."
- The site will give you a key. Copy it and paste it into your .env folder using the following syntax: "API_KEY = *API KEY GOES HERE*"
- Review any of your Javascript files to see where there are entries requiring API keys (API KEY GOES HERE.)
- In those areas, substitute the text: ${process.env.API_KEY}.
SAVE CHANGES.
- In the terminal prompt, type: "npm run build", then press return.
- Then, type: "npm run start". The program should then load in a new window on your browser.


## Known Bugs

_At the present moment, there are no known bugs. (7.7.2020).

## Support and contact details

Contact me for any concerns about this application:
<thomasgrantglenn@mac.com>

## Technologies Used

.html, .css, JavaScript, Bootstrap-3.4.1, jQuery-3.5.1, webpack, .JSON, .babelrc, .env, 

### License

* This application is licensed under the MIT license:

Copyright © 2020 **_Thomas Glenn_**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.