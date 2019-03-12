// document.getElementById()
const taskTitle = document.getElementById('task-title')
console.log(taskTitle)

// Get things from the element
console.log(taskTitle.id)
const getForm = document.querySelector('#task-form div')
console.log(getForm)
// Change styling
taskTitle.style.background = '#000'
taskTitle.style.color = '#fff'
taskTitle.style.padding = '10px'
// taskTitle.style.display = 'none'


// Change content
taskTitle.textContent = 'Are you kidding me ?'
taskTitle.innerText = 'Yes'
taskTitle.innerHTML = `<span style="color:red"> task-title <span>`

// document.querySelector()
console.log(getForm.className)

const li = document.querySelector('ul > li')
li.style.color = 'red'
const lastLi = document.querySelector('li:last-child')
const thirthLi = document.querySelector('li:nth-child(3)')
lastLi.style.color = 'blue'
thirthLi.style.color = 'green'
const evenLi = document.querySelectorAll('li:nth-child(even)')
evenLi.forEach(item => {
    item.style.background = 'green'
})
const oddLi = document.querySelectorAll('li:nth-child(odd)')
oddLi.forEach(item =>{
    item.style.background = 'red'
    item.style.color = '#fff'
})