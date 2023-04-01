
const guardarContacto = () =>{
    const nuevoContacto = { id: arrayContact.length + 1,
                            nombre: nombre.value.trim() ,
                            telefono: telefono.value ,
                            email: email.value
                           }
            
                           arrayContact.push(nuevoContacto)
                           limpiarContacto()
                           cargoTablaContacto(arrayContact)

}

const limpiarContacto = () =>{
    id.value = ''
    nombre.value = ''
    telefono.value = ''
    email.value = ''
}


btnEnviar.addEventListener('click', guardarContacto)


const cargoTablaContacto = (arr) =>{
    let tablaContacto = ''
    arr.forEach(contacto => {
        tablaContacto += `
        <tr>
        <td>${contacto.id}</td>
        <td>${contacto.nombre}</td>
        <td>${contacto.telefono}</td>
        <td>${contacto.email}</td>
    </tr>
        `
    })
    tbody.innerHTML = tablaContacto;
    guardoContactoStorage()
}




const buscarContacto = () => {
    let aBuscar = prompt('Ingrese el nombre que desea buscar 😜 : ')
    if (aBuscar.trim() != ''){
        const arrayResultado = arrayContact.find((c)=> c.nombre.toUpperCase() == aBuscar.toUpperCase())
        if (arrayResultado != '' && arrayResultado != undefined){
            id.value = arrayResultado.id
            nombre.value = arrayResultado.nombre
            telefono.value = arrayResultado.telefono
            email.value = arrayResultado.email
        }
        else{
            alert('!No hay coincidencia con la busqueda 😢¡')
        }
    }
}

btnBuscar.addEventListener('click',buscarContacto)






 

btnEliminar.addEventListener('click',()=>{
    let aBuscar = prompt('Ingrese el nombre que desea eliminar 💀 : ')
    if(aBuscar == null || aBuscar.trim() == ""){
        alert('No se encontro el contacto')
    }else{
        const indice = arrayContact.findIndex(c => c.nombre == aBuscar.trim())
        if(indice != -1){
            const confirma = confirm(`¿Desdea eliminar el contato?${aBuscar.trim()}`)
            if(confirma){
                arrayContact.splice(indice,1)
                cargoTablaContacto(arrayContact)
            }
        }
    }
}) 