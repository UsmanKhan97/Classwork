/* constructor(vinParam, makeParam){
    this.vin = vinParam;
    this.make =  makeParam;
    this.model = modelParam;
    this.running = false;
    console.log('Creating a new instance  of vechicle')
}
goVroom(){
    console.log('Vroom!')
}

start() {
    this.running = true;
    console.log('running')
}



const toyato = new Vechicle('X123Y', 'Boeing')
const tesla = new Vechicle()

console.log(toyota , tesla)
 */

/*class Cat{
    constructor(age, breed, vaccination){
        this.age =age
        this.breed = breed
        this.vaccination  = vaccination
}
    meow(){
        console.log('Meow')
}
     vaccinated(){
        (this.vaccination === 'yes'){
            console.log(this.breed , 'is vaccinated')
}   {
            console.log(this.breed , 'is not vaccinated')
 }
 }
 cute(){
    console.log('This cat is cute')
 }
}


const maya = new Cat(3, 'Persian', 'Yes')
const george  = new Cat(2, 'Sphinx',  'No')

console.log(maya)
console.log(george)

maya.meow()
george.vaccinated()
maya.cute() */

class Governor {
    static staticProperty = 'I will help you all (jk) ';
    static staticMethod() {
      return 'I Resign';
    }
    static {
      console.log('VOTE FOR ME');
    }
  }
  
  console.log(Governor.staticProperty);
  console.log(Governor.staticMethod());
  