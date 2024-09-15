What is an Event

--> Events allow you to write JavaScript code that reacts to certain situations. Examples of events include:

---> The user clicks the mouse button
---> The Web page loading
---> A form field being changed

As of today, there are 2 ways to handle events in JavaScript.

1. By using an event handler
2. By adding an event listenner

Event Handlers

JavaScript provides various kinds of event handler that get triggered base on specific actions on the HTML elements. Few of the event handlers are:

--> onclick: This Event handler invokes a JavaScript code when a click action happens on an HTML element. E.g.., when we click a button, a link is pushed, a checkbox checks or an image map is selected, it can trigger the onClick event handler.

--> onload: This event handler invokes a JavaScript code when a window or image finshes loading.

--> onmouseover: This event handler invokes a JavaScript code when we place the mouse over a specific link or an object.

--> onmouseout: This event handler invokes a JavaScript code when the mouse leaves a particular link or an object

--> onkeypress: This event handler invokes a JavaScript code when the user presses a key.

--> onkeydown: This event handler invokes a JavaScript code when during the keyboard actionk, we press the key down.

--> onkeyup: This event handler invokes a JavaScript code when during the keyboard action the key is released.

Bubbling vs Capture
--> There are two ways of event propagation in the HTML DOM, dubbling and capturing. Event propagation is a way of dfining the elmetn order when an event occurs.

--> In bubbling the outermost element's event is handled first and then the inner.

--> Whith the addEventListener() method you can specify the propagation type by using the 'useCapture' parameter:

--> addEventListener(event, function, useCapture);

The default value is false, which will use the gubbling propagation, when the value is set to true, the event uses the capturing propagation.
