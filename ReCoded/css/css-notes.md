# CSS Notes

- Notes that are taken during Recoded bootcamp. I'll take notes of what I don't know about css, not the whole.

## Combining Selectors

__Note: Make sure that you are properly using inheritance of properties and don't repeat yourself !__

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

---

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

---

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

---

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

#### More Margin with Kevin Powel

- margin auto use the empty space in that axis to push itself.

- if two elements have margin auto, the space evently shared!

  - BTW, this behaviour if the element is grid or flexbox!

---

## CSS Variables

- You can define variable in even CSS and use them in wherever you want !
- the value can be anything valid as a value of css property.

### Declare Variable

- To declare a css variable: -- double hyphen is used !
  - for example: `--primary-color: #ff1`

- The variables are generally defined in `:root` or ``html``

### How to Use Its value ?

- ``var()`` is used in order to get the value of a css variable.

---

## em, rem, px

- Rem and em are relative units used a lot by devs.

### Rem

- rem stands for _root element's_ __font size__.

- Generally, default font size is 16px. So, If a prop is 1 rem, it is 16px!

  - OFC, we can override this value using ``:root``

- Then you can calculate the size based on the rem value!
  - Example:

````css
:root{
  font-size:16px;
}
1.25rem will equal to 20px !
````

### Em

- em stands for _parent element's_ __font size__.

__PS: for properties like margin, padding etc. except font-size, em value corresponds to current element's font size, not parent. So, em can be used with margin and paddings which makes them fit to the font-size fluently, instead of font-sizes which may cause big problems__

----

## vh, vw, vmin, vmax

- v stands for viewport which is basicly the current area of page

- vh: viewport _height_

- vw: viewpoer _width_

- the difference between percentage is that while percentage is based on parent element's values, viewport is just based on the screen size actually.

- ignore using vm for paragraph font sizes but it can be useful for padding, margin and h1s

- vmin and vmax allows us to choose the ratio from the minimum or maximum value between vw and vh
  - vmin: If the height of screen is bigger than width, the percentage will be based on width, and visa versa.

---

## min, max, clamp

### min and max

- min(val1,val2)

  - what this is doing is to select the minimum val based on the situation.
  - if we put `width: min(500px, 70%)`, it'll select minumum value between them. If our screen was 1000px, it'd select 500px because it's less than 700px.

- max does the reverse.

- they can take more than 2 values but it gets more complex

### clamp

- it takes only 3 values: clamp(min, ideal, max)

-------------------

## Media Queries

- It allows us to apply css based on device type or other charachteristics like screen size, screen resolution, oriantation.

````css
default is all
@media device-type (condition){
  //normal css
}
````

- example:

````css
@media screen (min-width: 50rem){
  .container{
    ...
  }
}

````

## GRID

### Grid-Template-Area

- This allows to define areas with a unique syntax

````css
.container{
grid-template-areas:
'one one two five' /* this is the first row! names are the columns alligned by names */
'three four four five'; /* second row with 4 columns */
}
````

````css
.card:first-child{
  grid-area: one; /* assign the defined area*/
}
````

- If you want cards to have the same area, use this in the container: ``grid-auto: 1fr``

## MAKE SURE YOU DON'T DO THESE BASIC MISTAKES

- Don't overrely on flexbox system, there is grid system out there and some other solutions.

- Don't overrely on position obsolute, don't even use them if you're not stuck ! There are relative position and transform: translate etc.

- Name properly your classes and use utility classes for background colors, fonts etc so that you don't repeat youself.

- If you want to have equal flex items, try to use ``flex: 1`` or ``flex-basis: 100%``

- KEEP PRACTISE WHAT YOU LEARN !

### Website Help To Practise

- [frontendmentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV)
- [stylestage](https://stylestage.dev/)
  - It provides html document and expects us to come up with creative style. There is opportunity to be published on their site.
- [css battles](https://cssbattle.dev/) and [code wars](https://www.codewars.com/)
- [Frontend practise: Cloning Websites](https://www.frontendpractice.com/)

- [Open Source Guide](https://www.firsttimersonly.com/)

## Background Images, Settings

### Basics

- Make sure that you have image which is not that huge by size.

- You can repeat images to make them decorative.

- You can have image cover the area using ``background-size: cover``

- Another tip is that you can combine background color and background-image using ``background-blend-mode: multiply - lighten;``

--------------------

## SVG

## Responsive Design

__Most important mindset you need to take in yourself is preparing mobile design which actually has less complexity firsly. After that, add more complexity using media queries for wider screens like desktop.__

- First things first, you need to properly set up the basic css adding width, margin, padding, image sizes, color, font sizes and etc. This probably works for mobile. Than add flexboxes, media queries for desktop.

### HTML IS ALREADY RESPONSIVE

- If you don't have any line of css and just have html, you have responsive website.
- It is because by default, box width is 100% instead of __static value__
- Stick to assign percentage values to stick responsiveness!

- ok ok ok, hold on. percentage of what ? ofc, parent!

- As I said, websites are responsive by default! We are the ones who makes the websites unresponsive.

- As a general rule, don't change width and hight to a static value which ruins the responsiveness.
  - If you need more space, use padding!

### Width

- Avoid using static values like px. Instead, use ratios.
- % is based on parent's size.

- to avoid texts that streches all the way, you can use max-width

### Flex

- We need to use a container to be able to use flex items which are the direct children of this flex container.

- Flex items will shrink down to smallest possible size.

- If you want your children take the same size, use ``width:100%`` in children class.

#### Flex images

- If your img is not a flex item, it won't shrink. You can either make it flex item or set all img width to 100%.
