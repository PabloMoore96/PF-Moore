# Changes maded for better code

- The use of a formatter code, in this case i use Prettier-Standard - JavaScript formatter
    - VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=numso.prettier-standard-vscode
- Separate the SVG code into files saved on ./assets/img 
    - For these we going to need change some CSS line, because we are going to use <img> beside of <svg>

## Possibles changes

- Do all in a single page for better lecture and don't load more pages when click
    - On NavBar can use the buttons who scroll to the section, for this can use:
        - Example: <input type="button" onClick="document.getElementById('middle').scrollIntoView();" />
        - The scrollIntoView is a function used for move the page to the selected, in this case using an ID
- Change the background of the header
- Button "Volver arriba" need a style as a float button and this is always on the view of the user
- On "Lenguajes y Framworks" is better to get the image alone and give style after, at the moment you get an image who cannot be changed
    - For example get the python logo alone and after that give style for get the white shadow and the rectangle black on a <div>
- On "Aptitudes" and "Experiencia" can give more stylish for better lecture, more like the "Lenguajes y Frameworks"
    - Use card styles or something like title and description of the "aptitude", same apply for "Experiencia"
- Remove all the class who doesn't have style, it's a innecesary
