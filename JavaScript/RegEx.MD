# Regular Expressions

## Introduction
- A useful website for learing and building [RegEx](https://regexr.com/)

- First off, we use '/.../' slashes to denote a regular expression.

- Lets start with a simple example:

```javascript
const str = 'Hello World';
const result = str.replace(/Hello/, 'Hi'); // replace the first instance of 'Hello' with 'Hi'
console.log(result); // Hi World



## Flags
- Flags are used to modify the behavior of a regular expression. They are placed after the closing slash.
- The most common flags are:
  - g: global match
  - i: case insensitive
  - m: multiline

## Special Characters

- +: Matches at least one or more of the preceding token.
   - Example: /e+/g matches all the e's in "sheet, bed, let" => ee(not seperately), e, e.
- ?: Matches zero or one of the preceding token.
   - Example: /ea?/g matches all the ea's in "seat, eat, tea" => ea, ea.
   - Example: /e+a?/g matches all e's and ea's (optionally) in "seat, eat, tea, apple" => ea, ea, ea, e.
- *: Matches zero or more of the preceding token.
   - Example: /ea*/g matches all the e's, a's and ea's in "seat, eat, tea, apple" => ea, ea, ea, e
- .: Matches any single character except the newline character.
   - Example: /.e/g matches all the characters in "seat, eat, tea, apple" => se, e, te, le
- To cancel the special meaning of a character, we use the backslash character.
   - Example: /\,/g matches all the periods in "seat, eat, tea, apple" => ',' ',' ','

- \s: Matches a single white space character.
    - Example: /\s/g matches all the white spaces in "seat, eat, tea, apple" => , , ,
- \S: Matches a single non-white space character.
    - Example: /\S/g matches all the non-white spaces in "seat, eat, tea, apple" => seat, eat, tea, apple
- \w: Matches a single word character.
    - Example: /\w/g matches all the word characters in "seat, eat, tea, apple" => seat, eat, tea, apple
    - Example2: /\w{num}/ matches all the word has length of {num} characters in "seat, eat, tea, apple" => seat, apple
       - Example3: /\w{2,}/ matches all the word has length of 2 or more characters in "seat, eat, tea, apple" => seat, apple
- \d : Matches a single digit character.
    - Example: /\d/g matches all the digit characters in "seat, eat, tea, apple" => 1, 2, 3, 4


``The fat cat ran down the street.  
It was searching a mouse to eat.``


## Character Groupings

- [abc] looks for any of the characters inside the brackets.
- [^abc] looks for any character that is not inside the brackets.
- [a-z] looks for any character from a to z.
- [0-9] looks for any character from 0 to 9.
- [a-zA-Z0-9] looks for any character from a to z or from 0 to 9.
- (t | T) looks for either t or T.
- (t | e | r){2, 3} looks for either t or e or r, and the length of the word is between 2 and 3.
- group results can be accessed using \1, \2, \3, etc.