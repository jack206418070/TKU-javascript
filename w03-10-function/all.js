// FUNCTION DECLARATIONS

function greet(firstName = 'Alex', lastName = 'ComeOn'){
    return `Hello ${firstName + lastName}`
}
console.log(greet())
console.log(greet('Jack','Cheng'))
// FUNCTION EXPRESIONS

const square = function(x){
    return x*x
}

console.log(square(5))

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

;(function(){
    console.log('IIFE Run')
})()


;(function greet(firstName = 'Alex', lastName = 'ComeOn'){
    console.log( `Hello ${firstName + lastName}` )
})('Jack','Cheng')

// PROPERTY METHODS

const todo = {
    add(){
        console.log('Add todo....')
    },
    edit(id){
        console.log(`Edit todo ${id}`)
    },
    delete(id){
        console.log(`Delete todo ${id}`)
    }
}
todo.add()
todo.edit(11)
todo.delete(111)