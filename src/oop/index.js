export class Customer{
    constructor(id,customerNumber){
        this.id = id;
        this.customerNumber = customerNumber;
    }
}

let customer = new Customer(1,"12345");
//prorotyping
customer.name="Esra öks"
console.log(customer.name)

Customer.bisey="bisey"
console.log(Customer.bisey)

console.log(customer.customerNumber)

class individualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super(id,customerNumber)
        this.firstName=firstName
    }

}
class corporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName=companyName;
    }
}