# CSS Notes

- Notes that are taken during Recoded bootcamp. I'll take notes of what I don't know about css, not the whole.

## Combining Selectors

### Various Selectors Without Space Between Them

````css
selector-1selector-2{
    ...
}

````

- It selects the elemet(s) that has/have the given combination

- Examples

````css
h1.main-page{
    ...
}

#big-blue.large.blue{
    ...
}

````

### Ancestor and Child With Space Between Them

````css
ancestor child{
    ...
}
````

- It selects all children that the given ancestor is their ancestor. Ancestor doesn't need to be a direct parent of the given child.

````css
div p {
    Selects all p elements in divs
}
````

- This can be combined the previous combination

````css
header.main-header h1.brown{
    Selects all h1 elemets that has brown class in header element that has main-header class.
}
````

### Avoid Duplication

- You can avoid duplication using , between selectors that implies same properties

````cs
.big{
    font-size: 200%;
}
.large{
    font-size: 200%;
}
//to avoid duplaction, use this:
.big, .large{
    font-size: 200%;
}
````

### Asterisk * Selector

- It refers to everything and used to set default properties.

````css
* {
    font-family: ...
}
````

## Color Property

### Hexadecimal and RGB

- It's used with an # symbol.

- It takes 2 digits whose each digit value is between 0-15.
  - 0-9 is represented with numbers, 10-15 represented with a-f
- For each of RGB element, the value can be 0-255
  - An example: #003a2c
    - Red value is 0.
    - Green value is (3 * 10) 30.
    - Blue value is (2*12) 24.
- It can take 2 more digits to represent opacity.

### hsl and hsla

- h stands for hue and it can be between 0 and 360.
  - for example: 0 is red, 120 is green and etc.

- s stands for saturation which can be 0-100%
  - 0% s makes gray

- l stands for lightness which can be 0-100%
  - 100% makes white while 0% makes black
