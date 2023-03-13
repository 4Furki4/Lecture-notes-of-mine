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

### Adjacent Sibling Selector

- targets the elements that appear after the matching selector name

````css
h3 + p {
  color: blue;
}

<h3>Header</h3>
<p>I'm blue</p>
<p>I'm not blue</p>
````

### General Sibling Selector

- targets all elements that appear after the matching selector name

````css
h3 ~ p {
  color: red;
}
<h3>Header</h3>
<p>I'm red</p>
<p>I'm red</p>
````

### Attribute Selector

- It helps us to select elements with a spesific attribute.

````css
input[type="text"] {
  width: 200px;
}
````

### Asterisk * Selector

- It refers to everything and used to set default properties.

````css
* {
    font-family: ...
}
````

### Pseudo-class Selectors

- targets elements based on a state or a relationship to other elemets

````css

a:link {
  color: blue;
}

a:visited {
  color: purple;
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
    - Green value is 58.
    - Blue value is 44.
- It can take 2 more digits to represent opacity.

### hsl and hsla

- h stands for hue and it can be between 0 and 360.
  - for example: 0 is red, 120 is green and etc.

- s stands for saturation which can be 0-100%
  - 0% s makes gray

- l stands for lightness which can be 0-100%
  - 100% makes white while 0% makes black

-----------------------------

## Flexbox

- Flexbox makes our items in a container flexable and goals to align as minimum space as possible.

- It's being applied using `display: flex`

### Flexbox Direction

- Default is row, it makes main axis horizontal and cross axis vertical. However, column makes main axis vertical and cross axis horizontal.

  - Also there are 2 more direction which are row-reverse and column-reverse

### Justify Content

- Align flex items along the main axis.

### Align Items

- Align flex items along the cross axis

### Align Self

- It overrides the cross axis position of the element

## Position

### Static

- It is the default value of position property.
- It follows the document flow for positioning.

### Relative

- It works almost exactly the same as static.

- However, it allows us to use 4 property: left, right, top, bottom.

- these properties positiones the element relative to its normal position.

- It allows us to position absolute child elements inside of it.

### Absolute

- It makes the element as if it doesn't exit, the element removed completely from document flow and other elements renders as if the abosulte positioned element didn't exist.

- left, right, bottom, top properties positiones the element absolutely and its __reference is a parent element not positioned static or html page__

- useful when you want something in a specific position but want don't anything else move around it

### Fixed

- It works as the same as absolute but the difference is its reference is HTML page, not a parent and it is fixed that position even if we scroll.

### Sticky

- It works as the same as relative but when you scroll down, it works as a fixed position and positions itself top value.

## Box Model

- Everything in css is counted as BOX!

- These boxes have diff parts: actual content, padding, border and margin.

### Content

- This is the main part of an box and can be basicly modified using width and height.

- By default, a box total size is computed using height + top-bottom paadding + top-bottom border size (and width has the same logic too).

- But you can override this behaviour using Border-box so that width or height value subtracted by the padding and border value.
  - Developers usally use this behaviour without the need of calculating the total of size. It's because the size will be the values you give to height and width.

### Padding

- It occurs inside of the background of the element, or simply it add space between its border and content.

### Border

- As its name refers, it adds border.

### Margin

- It occurs outside of the element and used for adding space between 2 elements.

- Margin value is shared between elements and the biggest margin value is used.
  - If you have 2 adjacent elements with 10 px margin, margin will not be 20px between them!
