// FOR LOOP
for(let i = 1; i<=10; i++){
    if((i%2) === 0) console.log('Number:'+i)
}

// WHILE LOOP
let i = 1
while(i<=10){
    if((i%2) === 0){
        console.log('Number:'+i)
    }
    i++
}

// DO WHILE

let j = 1
do{
    if((j%2) === 0){
        console.log('Number:'+j)
    }
    j++
}while(j <= 10)



// LOOP THROUGH ARRAY
const cars = ['Ford','Honda','BMW','Toyota','Toyota','Ford','Honda','Ford','Honda',];

for(let i=0; i<cars.length; i++){
    console.log(`car${i+1}: ${cars[i]}`)
}

// FOREACH

cars.forEach((item,index,arr)=>{
    console.log(`car${index+1}: ${item}`)
})

let getCarsType = []
getCarsType = cars.filter((el,index,arr)=>{
    return arr.indexOf(el) === index
})

console.log(`carsType: ${getCarsType}`)
// MAP

const users = [
    {
        id: 1,
        name: 'Jack'
    },
    {
        id: 2,
        name: 'Mary'
    },
    {
        id:3,
        name: 'John'
    }
]

let names = users.map((user)=>{
    return user.name
})
console.log(names)



// FOR IN LOOP


const user = {
    firstName:'Jack',
    lastName:'Cheng',
    age:26
}

for(let item in user){
    console.log(`${item}: ${user[item]}`)
}