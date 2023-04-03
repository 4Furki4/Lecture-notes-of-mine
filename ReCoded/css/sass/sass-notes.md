# Scss Notes

## Setup

- Download Live Sass Compiler

- go to settings and edit the settings.json file

````json
{
    ..., // other settings
        "liveSassCompile.settings.formats": [ // formats of the compiled css files
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": "~/../css"
        }
    ]
}
````

## Variables
- Variables are declared with a `$` sign without any selector.
- They are complied to actual values

````scss	
$primary-color: #f31;

body {
    background-color: $primary-color;
}
````

## Mapping

- Mapping is a way to create a list of values.
- It is declared with a `$` sign and a `:` colon.
````scss
$font-weight: (
    "light": 300,
    "regular": 400,
    "bold": 700
)

body {
    font-weight: map-get($font-weight, "regular");
}
````

## Nesting

- Nesting is a way to group selectors together.

````scss
.main{
    p {
        color: red;
    }
}
which is the same as
.main p {
    color: red;
}

````

- & sign is used to avoid repetition of the same selector.

````scss
.main{
    .main__card {
        color: red;
    }
}
//& sign usage:
.main{
    //other css here
    &__card { // & = .main
        color: red;
    }
}
//but this compiles to:
.main__card {
    color: red;
}

//If you want the .main .main-card, we need to use interpolation
.main{
    #{&__card} { // # represents interpolation and gets the all selectors before main__card
        color: red;
    }
}

//which compiles to:
.main .main__card {
    color: red;
}

````

## Partials

- Partials are partial scss files that are imported into the main scss file.

- they start with an underscore `_` and are imported with the `@import` keyword.

````scss
// imagine that I created a scss file called _resets.scss
@import './variables' // no need to add neither the underscore nor the extension
````
- this will help to modulerize the code and make it more readable.


__@IMPORT IS DEPRECATED__

- use `@use` instead of `@import` to import partials.

````scss
@use 'abstract/variables';

body {
    background-color: variables.$primary-color; // the difference is that file names have bacome namepspaces.
    // this avoids any conflicts with other variables with the same name.
    // you can change the namespace names using _as keyword_ or remove it completely using *.
}
````
- forward is used to pile up the use imports and them allow to import in a row.
- this should be done in _index.scss file.

````scss
// in abstanct/_index.scss
@forward 'abstract/variables';
@forward 'abstract/fonts';
// so that you can group your imports and import them in a row.

//in any file
@use '~/abstract'; // it brings all the imports from the index file.
````
## Functions

````scss 

@function fName($name, $arguments, $body) {
    //code
}

@function weight($weight) {
    @return map-get($font-weight, $weight);
}
````

## Mixins

- Mixins are a way to create reusable code like functions. 

````scss

@mixin mixinName{
    //code to be reused
}

.main {
    @include mixinName;
}
// they can also take arguments
@mixin mixinName($arg1, $arg2){
    //code to be reused
    property: $arg1;
    property: $arg2;
}
.main {
    @include mixinName($arg1, $arg2);
}
````
- Mixins can be used with if and else. Let me give an example using dark-light mode.

````scss
@mixin dark-mode($color) {
    @if $color == "dark" {
        background-color: black;
        color: white;
    } @else if $color == "light" {
        background-color: white;
        color: black;
    }
}

body {
    @include dark-mode("dark");
}
````

- Another example with mixins using media queries:

````scss
@mixin mobile {
    @media only screen and (max-width: 600px) {
        @content; // @content is used to include the content of the mixin
    }
}

@include mobile {
    // just your custom css for mobile version without adding media query ^_^
}
````

## Extend

- Extend is a way to extend the properties of a selector to another selector.

````scss
.main {
    color: red;
}

.main__card {
    @extend .main;
    background-color: blue;
}
````