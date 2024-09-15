The HTML DOM

--> when a web page is loaded, the browser creates a document object model of the page.

--> The HTML DOM model is constructed as a tree of objects:

Finding The HTML Element

--> Finding HTML element by id: document.getElementById('intro');

--> Finding HTML element by tag name: document.getElementsByTagName('p');

--> Finding HTML element by class name: document.getElementsByClassName('intro');

--> Finding HTML elements by css selector: document.querySelectorAll('p.intro');

Modifying HTML

--> changing HTML Content using innerHTML:
document.getElementById(id).innerHTML = new HTML;

--> changing HTML attributes value:
document.getElementById('myImage').src = 'landscape.jpg';
document.getElementById('p2').style.color = 'blue';

--> modifying class in HTML
element.classList.add('mystyle');
element.classList.remove('mystyle');
element.classListl.toggle('mystyle);

Createing And Appending HTML

--> We can create a new element using the createElent() method of the document. We can append this new element (node) inside any other element.

const para = document.createElement('p');
const element = document.getElementById('div');
element.appendChild(para);
