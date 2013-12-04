# jQuery Boilerplate [![Build Status](https://secure.travis-ci.org/jquery-boilerplate/jquery-boilerplate.png?branch=master)](https://travis-ci.org/jquery-boilerplate/jquery-boilerplate)

### A jump-start for jQuery plugins development

Are you as tired as I am of "Are you sure?" dialog boxes to make sure users don't hurt themselves? Then maybe you are in the right place. This plugin makes the user hold a button down (or any container element) for a priod of time before acting. This is my first attempt at writing a jQuery plugin. I am VERY much open to suggestions.

Also, I totally stole this idea from someone else but I can't remember who it was or where I saw it or even when. 

## Usage

1. Include jQuery of course:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="dist/jquery.pressAndHold.js"></script>
	```

3. Call the plugin:

	```javascript
	$("#element").pressAndHold({
		holdTime: 700,
		progressIndicatorRemoveDelay: 300,
		progressIndicatorColor: "#ff0000",
		progressIndicatorOpacity: 0.6
	});
	```

## Structure

The basic structure of the project is given in the following way:

```
├── demo/
│   └── index.html
├── dist/
│   ├── jquery.boilerplate.js
│   └── jquery.boilerplate.min.js
├── src/
│   ├── jquery.boilerplate.coffee
│   └── jquery.boilerplate.js
├── .editorconfig
├── .gitignore
├── .jshintrc
├── .travis.yml
├── boilerplate.jquery.json
├── Gruntfile.js
└── package.json
```

#### [demo/](https://github.com/jquery-boilerplate/boilerplate/tree/master/demo)

Contains a simple HTML file to demonstrate your plugin.

#### [dist/](https://github.com/jquery-boilerplate/boilerplate/tree/master/dist)

This is where the generated files are stored once Grunt runs.

#### [src/](https://github.com/jquery-boilerplate/boilerplate/tree/master/src)

Contains the files responsible for your plugin, you can choose between JavaScript or CoffeeScript.

#### [.editorconfig](https://github.com/jquery-boilerplate/boilerplate/tree/master/.editorconfig)

This file is for unifying the coding style for different editors and IDEs.

> Check [editorconfig.org](http://editorconfig.org) if you haven't heard about this project yet.

#### [.gitignore](https://github.com/jquery-boilerplate/boilerplate/tree/master/.gitignore)

List of files that we don't want Git to track.

> Check this [Git Ignoring Files Guide](https://help.github.com/articles/ignoring-files) for more details.

#### [.jshintrc](https://github.com/jquery-boilerplate/boilerplate/tree/master/.jshintrc)

List of rules used by JSHint to detect errors and potential problems in JavaScript.

> Check [jshint.com](http://jshint.com/about/) if you haven't heard about this project yet.

#### [.travis.yml](https://github.com/jquery-boilerplate/boilerplate/tree/master/.travis.yml)

Definitions for continous integration using Travis.

> Check [travis-ci.org](http://about.travis-ci.org/) if you haven't heard about this project yet.

#### [boilerplate.jquery.json](https://github.com/jquery-boilerplate/boilerplate/tree/master/boilerplate.jquery.json)

Package manifest file used to publish plugins in jQuery Plugin Registry.

> Check this [Package Manifest Guide](http://plugins.jquery.com/docs/package-manifest/) for more details.

#### [Gruntfile.js](https://github.com/jquery-boilerplate/boilerplate/tree/master/Gruntfile.js)

Contains all automated tasks using Grunt.

> Check [gruntjs.com](http://gruntjs.com) if you haven't heard about this project yet.

#### [package.json](https://github.com/jquery-boilerplate/boilerplate/tree/master/package.json)

Specify all dependencies loaded via Node.JS.

> Check [NPM](https://npmjs.org/doc/json.html) for more details.

## Guides

#### How did we get here?

Have you got in this repo and still not sure about using this boilerplate?

Well, extending jQuery with plugins and methods is very powerful and can save you and your peers a lot of development time by abstracting your most clever functions into plugins.

[This awesome guide](https://github.com/jquery-boilerplate/boilerplate/wiki/How-did-we-get-here%3F), adapted from [jQuery Plugins/Authoring](http://docs.jquery.com/Plugins/Authoring), will outline the basics, best practices, and common pitfalls to watch out for as you begin writing your plugin.

#### How to publish plugins?

Also, check our guide on [How to publish a plugin in jQuery Plugin Registry](https://github.com/jquery-boilerplate/boilerplate/wiki/How-to-publish-a-plugin-in-jQuery-Plugin-Registry
)!

## Team

jQuery Boilerplate was made with love by these guys and a bunch of awesome [contributors](https://github.com/jquery-boilerplate/boilerplate/graphs/contributors).

[![Zeno Rocha](http://gravatar.com/avatar/e190023b66e2b8aa73a842b106920c93?s=70)](http://zenorocha.com) | [![Addy Osmani](http://gravatar.com/avatar/96270e4c3e5e9806cf7245475c00b275?s=70)](http://addyosmani.com)
--- | --- | --- | --- | --- | --- | ---
[Zeno Rocha](http://zenorocha.com) | [Addy Osmani](http://addyosmani.com)

## Contributing

Check [CONTRIBUTING.md](https://github.com/jquery-boilerplate/boilerplate/blob/master/CONTRIBUTING.md)

## History

Check [Release](https://github.com/jquery-boilerplate/jquery-boilerplate/releases) list.

## License

[MIT License](http://zenorocha.mit-license.org/)
