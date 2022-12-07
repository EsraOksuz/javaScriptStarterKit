function isPrimeNumber(...numbers){
    for(let i =0; i<numbers.length; i++){
        let prime = false
        var element = numbers[i]
        for (let j = 2; j < numbers[i]; j++) {
            if (numbers[i] % j == 0) {
                prime=false
                break
            }else{
                prime =true 
            }          
        }
        console.log(element, prime)
    }

}

isPrimeNumber(1,4,34,546,34,23,13,5,7,9,4,3)

function friendsNumber(num1,num2){
    let sum1= 0
    let sum2=0
    let isFriend = false     
    for (let j = 0; j < num1; j++) {
        if (num1 % j ==0) {
            sum1= sum1 +j;
        }            
    }
    if(sum1 == num2){
        for (let j = 0; j < num2; j++) {
            if (num2 % j ==0) {
                sum2= sum2 +j;
            }            
        }
    }
    if(sum2==num1){
        isFriend=true;
    }

    console.log(isFriend)
}

friendsNumber(220,284)

function perfectNumber(){
    let sum1=0 
    for (let index = 0; index < 10000; index++) {
        for (let j = 0; j < index; j++) {
            if (index % j ==0) {
                sum1= sum1 +j
            }            
        }
        if(sum1==index){             
            console.log(index)
        }
        sum1=0
    }
   
}
perfectNumber()

function findPrimes(){
    let prime= true
    // for(let i =2; i<100; i++){
    //     for (let j = 2; j < i; j++) {
    //         if (i % j == 0) {
    //             prime = false
    //             break
    //         }      
    //     }
    //     if(prime){
    //         console.log(i)
    //     }
    //}  
    for(let i =0; i<1000; i++){
        let prime = false
        var element = i
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                prime=false
                break
            }else{
                prime =true 
            }                     
        }
        if (prime==true) {                
            console.log(element)
        } 
    }
  
}

console.log("Primes:")
findPrimes()
