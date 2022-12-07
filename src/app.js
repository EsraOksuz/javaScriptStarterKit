console.log("Merhaba Kodlama.io")

let dolarDun =  9.20
let dolarBugun = 9.30 

//JS type dafe değildir
// var global değişken let daha sağlıklı;sadece kod bloğu içinde erişilebiliyor
//const read only, sonrasında başka bir şey atayamazsın
{
    let dolarDun=9.10
}

console.log(dolarDun)

const euroDun =11.2
//euroDun= 11
console.log(euroDun)

let konutKredileri =["Konut Kredisi","Emlak Konut","Kamu Konut"]
console.log("<ul>")
for (let index = 0; index < konutKredileri.length; index++) {
    console.log("<li>" + konutKredileri[index] + "</li>")
}
console.log("</ul>")


console.log(konutKredileri)


let sayi1 = 10
sayi1='EnginDemiroğ'
let student ={id:1,name:'ESRA'}
console.log(student) 

function save(ogr,puan=10) {
    console.log(ogr.name + " : " + puan)
}

save(student,100);

let students=["Esra Ök","Bora Özg","Esre Bs"]
console.log(students)

let students2 =[student,{id :2, name:"Halit"},"Ankara",{city:"İstanbul"}]
console.log(students2)

//rest
//params, varArgs
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products)
}

console.log(typeof showProducts)
showProducts(10,"elma","armut","karpuz")

//spread

let points =[1,2,3,4,50,7,13]
console.log(...points)
console.log(Math.max(...points))

console.log(..."ABC","D","EFG","H")

//destructuring
let populations =[10000,20000,30000,[40000,50000]]

let [small,medium,high,[veryHigh,max]] = populations

console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(max)


function someFunction([small1],number) {
    console.log(small1)
}

someFunction(populations)

let category ={id:1,name1:"içecek"}
console.log(category.id)
console.log(category["name1"])

let {id,name1}= category
console.log(id)
console.log(name1)



