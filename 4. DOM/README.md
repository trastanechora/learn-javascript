# Document Object Model (DOM)
DOM is a standard for how to get, change, add, or delete HTML elements. It defines HTML elements as object, properties of all elements, methods to access HTML elements and “events” for all HTML elements.


## Finding HTML Elements
| Method                                | Description                   |
|---------------------------------------|-------------------------------|
| document.getElementById(id)           | Find an element by element id |
| document.getElementsByTagName(name)   | Find elements by tag name     |
| document.getElementsByClassName(name) | Find elements by class name   |



## Changing HTML Elements
| Property                             | Description                                   |
|--------------------------------------|-----------------------------------------------|
| element.innerHTML =,new html content | Change the inner HTML of an element           |
| element.attribute = new value        | Change the attribute value of an HTML element |
| element.style.property = new style   | Change the style of an HTML element           |

| Method                                 | Description                                   |
|----------------------------------------|-----------------------------------------------|
| element.setAttribute(attribute, value) | Change the attribute value of an HTML element |

## DOM Events
An event is a signal that something has happened. All DOM nodes generate such signals (but events are not limited to DOM). Here’s a list of the most useful DOM events, just to take a look at:
- Mouse events: click, contextmenu, mouseover, mousedown, mousemove.
- Form element events: submit, focus.
- Keyboard events: kaydown, keyup.
- Document events: DOMContentLoaded.
- CSS events: Transitionend.