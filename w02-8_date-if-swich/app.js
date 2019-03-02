{
function dateFormat(search){
    if(search === 'today'){   
        let newDate = Math.floor(Date.now() / 1000)
        let today = new Date(newDate * 1000)
        let year = today.getFullYear()
        let month = today.getMonth() + 1
        let day = today.getDate()
        let hours = today.getHours()
        let mins = today.getMinutes()
        let secs = today.getSeconds()
        return `today is :  ${year}/${month}/${day}    ${hours}:${mins}:${secs}`
    }else if(search === 'birthday'){
        let birthday = new Date('1992 / 01 / 30')
        let year = birthday.getFullYear()
        let month = birthday.getMonth() + 1
        let date = birthday.getDate()
        return `My birthday is : ${year}/${month}/${date}`
    }
}
    
let today = dateFormat('today')
console.log(today)

let birthday = dateFormat('birthday')
console.log(birthday)
}

{
const man = 'man'
const man_age = 30
const woman = 'woman'
const woman_age = 16

console.log(`${man} is ${(man_age <= 18 ? 'kid' : 'adult')}`)
console.log(`${woman} is ${(woman_age <= 18 ? 'kid' : 'adult')}`)



//creat a object arr
let people = [
    {
        name: man,
        age: man_age
    },
    {
        name: woman,
        age: woman_age
    }
]

//By if else if condition
function conditionKorA(people){
    for(let i = 0; i < people.length; i++){
        if(people[i].age > 18){
            console.log(`${people[i].name} is adult`)
        }else if(people[i].age >= 0 || people[i].age <= 18){
            console.log(`${people[i].name} is kid`)
        }else{
            console.log(`Isn't a correct data`)
        }
    }
}
conditionKorA(people)


// By switch condition
function cinditionBySwitch(people){
    for(let i = 0; i < people.length; i++){
        switch(true){
            case people[i].age > 18:
                console.log(`${people[i].name}  is adult`)
                break
            case people[i].age >= 0 && people[i].age < 18:
                console.log(`${people[i].name}  is kid`)
                break
            default:
                console.log(`Isn't a correct data`)
        }   
    }
}
cinditionBySwitch(people)
}