# jQuery Press and Hold


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

#### [demo/](https://github.com/santhony7/pressAndHold)

Contains a simple HTML demo.


