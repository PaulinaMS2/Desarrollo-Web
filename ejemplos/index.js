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