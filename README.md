# Album
 
This is a privileged app I have created for the mozilla app of the month (May-July) contest. I have started on the app by using a privileged app template that has provided me with a barebones structure to build this app.

In this app am attempting to an app that allows users to store pictures and create photo albums using IndexedDB API and I also hope to add Vibration API for notifications


## Code Sample 
indexed db API usage and code samples can be got from https://hacks.mozilla.org/2012/02/storing-images-and-files-in-indexeddb/


The `manifest.webapp` file contains metadata about the app, such as its name, description, icon and required permissions for running under Firefox OS

Moving over to `index.html`, this is the starting point for the app when it's launched, and also where the layout is defined and the JavaScript files with the functionality and logic are loaded.

The appearance is defined in `css/app.css`. There are just some very basic rules.

We define the app's behaviour in `js/app.js`.

Finally we are also including `js/libs/l10n.js`, which contains [L10n](https://developer.mozilla.org/en-US/docs/Web/API/L10n_API), a library for translating the strings in the app. Using this library, users can run the app in their own language, as long as you provide the translations for those languages. We're currently including a translation to Spanish as an example, but feel free to contribute with more translations in `data/locales.ini`, looking at `data/es.properties` and `data/en-US.properties` to see the syntax in action. The way it works, it will automatically translate the HTML elements that contain a `data-l10n-id` attribute with the translation identifier.

For any dynamically shown content, you need to use the `navigator.webL10n.get` function, but since that is slightly tedious to write each time, we're aliasing it to just `translate`:

```javascript
var translate = navigator.mozL10n.get;
```


##Motivation
The idea is inspired by the need to create a photo storage app that works like and album and 

## Installation

Import the app into the [App Manager](https://developer.mozilla.org/Firefox_OS/Using_the_App_Manager). Then you can run it in the simulator, or in a Firefox OS device.


line to sample code for html5 webapps
http://www.codeproject.com/Articles/546960/HTML-Quick-Start-Web-Application

## Contributing

Contributions are always welcome! If you want to collaborate just fork the project and well get along quite fine.
