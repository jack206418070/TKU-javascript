// REPLACE ELEMENT

// Create Element
const newHeading = document.createElement('h2')
// Add id
newHeading.id = 'task-title'
// New text node
newHeading.appendChild(document.createTextNode('Task List'))
// Get the old heading
const oldHeadong = document.getElementById('task-title')
// Parent
const cardAction = document.querySelector('.card-action')
// Replace
cardAction.replaceChild(newHeading,oldHeadong)
// REMOVE ELEMENT
const lis = document.querySelectorAll('li')
const list = document.querySelector('ul')
// Remove list item
list.removeChild(lis[3])
// Remove child element
const firstLi = document.querySelector('li:first-child')
const link = firstLi.children[0]
let val
// CLASSES & ATTR

// Classes
val = link.className
val = link.classList
val = link.classList[0]
link.classList.remove('test')
link.classList.add('test')
val = link
// Attributes

val = link.getAttribute('href')
val = link.setAttribute('href','http://google.com')
link.setAttribute('title', 'Google')
val = link.hasAttribute('title')
link.removeAttribute('title')
val = link;

console.log(val)