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