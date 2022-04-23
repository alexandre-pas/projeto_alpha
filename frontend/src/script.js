const btnLogin = document.querySelector('#btn-login');
const password = document.querySelector('#input-password');
const email = document.querySelector('#input-email');
const invisible = document.querySelector('#icon-invisivel');

btnLogin.addEventListener('click',access);

//invisible.addEventListener('click',hiddenPassword);

function hiddenPassword(){
    const status = password.getAttribute('type');
    (status === 'password') ? invisible.setAttribute('src', 'img/visible.png') : invisible.setAttribute('src', 'img/invisible.png');
    return (status === 'password') ? password.setAttribute('type', 'text') : password.setAttribute('type', 'password');
}

async function access(){
    console.log(email.value,password.value)
    const record = {
        name :'Victor', //name.value
        email : 'victor@gmail.com',//email.value
        cpf: '39496631345',
        password: 'depoistefalo',
        signed: "accept the terms"
    }

    const myHeaders = {
        method: "POST",
        body: JSON.stringify(record),
        headers:{
            "content-type" : "application/json"
        }
    }

    console.log("entrou");
    let result
    try {
        //const test = await fetch('http://localhost:3000/setcookie');
        const test = await fetch('http://localhost:2000/clients/',myHeaders)
        result = await test.json()
    } catch (error) {
        
    }
    console.log(result)
    return result
}