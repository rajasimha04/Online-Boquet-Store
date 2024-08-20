const form=document.getElementById('form');
const username=document.getElementById('username');
const password=document.getElementById('password');

form.addEventListener('submit',e=> {
    e.preventDefault();

    checkinputs();
});


function checkinputs() {
    // trim to remove the white spaces
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if(usernameValue ===''){
        setErrorFor(username, 'Username cannot be blank');
    }else{
        setSuccessFor(username);
    }

    if(passwordValue ===''){
        setErrorFor(password, 'Password cannot be blank');
    }else{
        setSuccessFor(password);
    }
}

function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText=message;
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control sucess';
}
