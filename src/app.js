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