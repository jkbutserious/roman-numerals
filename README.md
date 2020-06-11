# Roman Numerals

#### Arabic to Roman numeral conversion program, 6.11.2020

#### By Jeff Kim and Deryck Jackson

## Description

This program accepts user input in the form of Arabic numerals from 1 to 3999 and converts it to Roman numerals. The resulting numeral conforms to the universally accepted [Standard form of Roman numerals](https://en.wikipedia.org/wiki/Roman_numerals#%22Standard%22_form) and follows these basic rules:

* The values of consecutive symbols are added together (II === 2)
* Consecutive symbols are limited to 3, after which, subtractive logic is employed (IV = 4)
* Ones, tens, hundreds, and thousands are separated (99 === XCIX, not IC)
* Because of the preceding constraints, the upper limit of Roman numeral notation is 3999, due to the lack of a symbol for the value of 5000

## Specs

1. Code should recognize numbers and output the appropriate Roman numeral expression
Example Input: "1"
Example Output: "I"

2. Code should express numbers as sums of Roman numeral symbols
Example Input: "6"
Example Output: "VI"

3. Code should express numbers as subtractions of Roman numeral symbols
Example Input: "9"
Example Output: "IX"

4. Code should reject non-numeral input
Example Input: "C9"
Example Output: "Please input a value using numbers"

5. Code should separate Roman numeral expressions into groups of ones, tens, hundreds, and thousands
Example Input: "1111"
Example Output: "MCXI"

## Setup/Installation Requirements

To use this site:

1. Open your preferred browser.
2. Navigate to https://jkbutserious.github.io/roman-numeral.
3. In the text field, enter a number from 1 to 3999. Note: Non-numerical characters and numbers below 1 and above 3999 will not be accepted by the input field.
4. Click Submit.

Your number will be converted to a Roman numeral and displayed on the page.

To contribute to this project:

1. Open your preferred browser.
2. Navigate to https://github.com/jkbutserious/roman-numerals.git.
3. Log into or sign up for your GitHub account.
4. Click the **Fork** button to copy the repository and all source code.

## Known Bugs

**Initial Release**
* No known bugs

## Support and contact details

To report any issues with this page or to contribute to this project, contact Jeff Kim at kim2jy@hotmail.com or Deryck Jackson at Dgjackson01@gmail.com.

## Technologies Used

This page was created using the following technologies:

* HTML
* CSS
* Bootstrap
* JavaScript
* JQuery

### License

Copyright © 2020 Jeffrey Kim and Deryck Jackson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.