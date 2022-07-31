const sendMsj = (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let rooms = document.getElementById("rooms").value;

    const URL_API = 'https://api.whatsapp.com/send?phone=573215398340&text=Hola%20%F0%9F%98%80%2C%20mi%20nombre%20es%20' + name + '%2C%20estoy%20interesado(a)%20en%20' + rooms + '%2C%20si%20desea%20enviarme%20mas%20informaci%C3%B3n%2C%20lo%20puede%20enviar%20al%20correo%20' + email + '.';
    document.getElementById("form").reset();
    window.open(URL_API, '_blank');
}

document.getElementById("btn").addEventListener("click", sendMsj);
