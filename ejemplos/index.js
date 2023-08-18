
const getDataForm =() => {
    const txtName = document.getElementById("txtName").value;
    const txtemail = document.getElementById("txtEmail").value;
    const txtDesciption = document.getElementById("txtDesciption").value;
    const acceptConditions = document.getElementById("acceptCondition").checked;
    const typeA = document.getElementById("typeA").checked;
    const typeB = document.getElementById("typeB").checked;
    

    //JSON {clave:valor}
    const data = {
        name:txtName,
        email:txtemail,
        description:txtDesciption,
        acceptCondition: acceptConditions,
        typeA,
        typeB
    }

    console.log(data);
}

