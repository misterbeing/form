const login = document.getElementById('login');



function validate()
{
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username == 'abc' && password == '1234')
    {
        alert("login succesfull");
        window.location.href="../form1/form.html";
    }

    else{
        alert("Please Enter Valid Username and password");
    }
}

login.addEventListener('click', validate);