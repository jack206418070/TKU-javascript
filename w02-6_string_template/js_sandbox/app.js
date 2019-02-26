const name = 'Jack';
const age = 26;
const job = 'Web Developer';
const city = 'Taipei';
let html;
let stringTemplate;
// Without template strings (es5)

html =  '<h2>Without template strings</h2>'+
        '<ul>'+
        '<li> name: '+name+'</li>'+
        '<li> age: '+age+'</li>'+
        '<li> job: '+job+'</li>'+
        '<li> city: '+city+'</li>'+
        '</ul>'
document.querySelector('.content').innerHTML = html


function wolf(num){   
    let allstr = ''
    for(let i = 0; i<num ; i++){
        let str =  ` ${i+1}wolf `
        allstr +=  str
    }
    return allstr
}

// With template strings (es6)

html = `<h2>With template strings (es6)</h2>
        <ul>
            <li>name: ${name}</li>
            <li>age: ${age}</li>
            <li>job: ${job}</li>
            <li>city: ${city}</li>
            <li>age ${(age>=30 ? 'over30' : 'under30')}</li>
            <li>${wolf(age)}</li>
        </ul>`
document.querySelector('.template').innerHTML = html

