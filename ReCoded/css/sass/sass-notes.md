# Sass Notes

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