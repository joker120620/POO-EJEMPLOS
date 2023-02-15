//abstracion
class ser_vivo{
    constructor(especie, patas) {
        this.especie = especie;
        this.patas = patas;
      }
}
class animal extends ser_vivo {
  constructor(especie, patas,edad) {
    super(especie, patas);
    this.edad = edad;
  }
  getDatos() {
    console.log(`edad: ${this.edad},especie ${this.especie}`);
  }

  comer() {
    console.log("comiendo...");
  }
}
const perro = new animal("canino",4,2);
console.log(perro.comer());

//polimormismo
class planta extends ser_vivo {
    constructor(especie,) {
        super(especie, hojas);
        this.hojas = hojas;
      }
      getDatos(string) {
        console.log(string)
      }
      describir() {
        let string=`especie: ${this.especie},cantidad de hojas${this.hojas}`
        getDatos(string)
      }
}

//herencia
class persona {
    constructor(nombre, apellido) {
      this.nombre = nombre;
      this.apellido = apellido;
    }
    hablar(){
        console.log("hola")
    }
  
    getDatos() {
      console.log(`nombre: ${this.nombre},apellido: ${this.apellido}`);
    }
  }
const Juan = new persona("Juan","Toloza")


class trabajador extends persona {
    constructor(nombre, apellido,rol) {
      super(nombre,apellido);
      this.rol = rol;
    }
    presentar() {
      console.log(`Mi nombre es ${this.nombre} ${this.apellido}, mi rol es ${this.rol}`);
    }
  }

const Camilo = new trabajador("Camilo","Torres","administrador")
console.log(Camilo.presentar());


//ENCAPSULAMIENTO
class estudiante extends persona {
  #edad;
  constructor(nombre, apellido, edad) {
    super(nombre, apellido);
    this.#edad = edad;
  }
  getEdad() {
    if(this.#edad>=18){
        console.log(`Soy mayor de edad: ${this.#edad} años`)
    }else{
        console.log(`Soy menor de edad: ${this.#edad} años`)
    }
  }
}
const jose= new estudiante("Jose","Perez",19)
console.log(jose.getDatos());
console.log(jose.getEdad());