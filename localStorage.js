const recuperoDatos = () =>{
    strg = localStorage.getItem("arrayContact")
    if(strg != null){
        arrayContact = JSON.parse(strg)
        if(arrayContact.length > 0){
            cargoTablaContacto(arrayContact)
        }
    }
}



const guardoContactoStorage = () => {
    if(arrayContact.length > 0){
        localStorage.setItem("arrayContact", JSON.stringify(arrayContact))
    }
}

document.addEventListener('DOMContentLoaded',recuperoDatos)