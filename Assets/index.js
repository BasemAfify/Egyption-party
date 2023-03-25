/*
// **************************Map*********************************
// let mapPerson = new Map()

// mapPerson.set("name", "Ahmed");
// mapPerson.set("age", 26);
// mapPerson.set("sallary", 6600);
// mapPerson.set("gender", "male");
// mapPerson.set(["Ahmed","Mohamed","Asmaa"], "family");

// for(let [key, value] of mapPerson){
//     console.log(value);
// }

// console.log(mapPerson.get("name"));
// console.log(mapPerson.has("name"));
// console.log(mapPerson.has("name1"));
// console.log(mapPerson.delete("name"));
// console.log(mapPerson.clear());
// console.log(mapPerson.values());
// console.log(mapPerson.size);

// for(let [x, y] of mapPerson){
//     console.log(y);
// }

// let person = {
//     name: "ahmed",
//     gender: "male",
//     age : 26,
//     sallary : 6500
// }

// let newMapPerson = new Map(Object.entries(person))
// console.log(newMapPerson);
*/

/**
 * 
 * children
 * childElementCount
 * childNodes
 * nextSibling
 * nextElementSibling
 * previousSibling
 * previousElementSibling
 * parentElement
 * parentNode
 *
 */

/**
 let img = document.createElement('img')
img.setAttribute('src','images/1.jpg')
img.setAttribute('alt','test')
img.classList.add('w-50')

document.body.append(img)
 */

/*
let tr = document.createElement('tr')
let td = document.createElement('td')
let tdText = document.createTextNode('Web Design')

td.append(tdText)
tr.append(td)

document.querySelector("tbody").append(tr) */

/*
function createElement() {
    let img = document.createElement('img')
    img.setAttribute('src', 'images/BigChickenCIU.webp')
    img.style.width = '70'

    document.querySelector('.container').append(img)
}

let counter = 0;
let x = setInterval(() => {
    counter++;
    createElement()
    if (counter == 100) {
        clearInterval(x)
    }
}, 50)

 */

/*
var x = setTimeout(()=>{
    console.log("Hi");
},5000)


document.addEventListener('click',()=>{
    console.log("Set Time Out was Deleted");
    clearTimeout(x)
}) */




