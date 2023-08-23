//Array
const estudiantes = []

//agregar un elemento
// estudiantes.push(5)
// estudiantes.push(null)
// estudiantes.push({})
// estudiantes.push(()=>(console.log()))

estudiantes.push({"nombre": "Juan", id:123})
estudiantes.push({"nombre": "Maria", id:1234})

estudiantes.forEach((x)=>console.log(x.nombre))

for(let i=0; i<estudiantes.length; i++){
    if (estudiantes[i].nombre == "Maria"){
        console.log(estudiantes[i].id);
    }
}

const maria = estudiantes.find((x)=>x.nombre == "Maria")
console.log(estudiantes);

const marias = estudiantes.filter((x)=>x.nombre == "Maria")
marias[0].id

estudiantes = estudiantes.map(x=>{return{...x, edad: null}})
console.log(estudiantes);

//JSON (Javascript object notation)
jsonEnJavascript();

function jsonEnJavascript(){
    console.log("--Manejo de Json--")
    const ciudad = {
        nombre:"Medellín",
        poblacion: 2.5,
        barrios_count: 31,
        calcularCantidadVehiculos(){
            console.log("Total de vehiculos", "55m");
        }
    };
    //Destructuración
    const {nombre:nombreCiudad} = ciudad;
    console.log(nombreCiudad);

    //funciones dentro de un json
    ciudad.calcularCantidadVehiculos()
    console.log(ciudad.nombre);
    // console.log(ciudad{nombre});
}



