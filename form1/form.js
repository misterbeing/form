
const submit = document.getElementById('submit_form');


function form()
{

  const name1 = document.getElementById('name_input').value;
  const age = document.getElementById('age_input').value;
  const salary = document.getElementById('salary_input').value;
  const email = document.getElementById('email_input').value;
  const remarks = document.getElementById('textarea').value;

  let user_data = new Array();
  user_data = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")): []
  if(user_data.some((v)=>{return v.email == email}))
  {
      alert (" User Already Exist ");
  }
  else {
  user_data.push({
      "name1": name1,
      "age":age,
      "salary":salary,
      "email":email,
      "remarks":remarks
  })
  localStorage.setItem("users",JSON.stringify(user_data));
}
showData();
}

function clean ()
{
  document.getElementById('name_input').value = "";
  document.getElementById('age_input').value= "";
  document.getElementById('salary_input').value ="";
  document.getElementById('email_input').value= "";
  document.getElementById('textarea').value="";
}


function showData()
{
  document.getElementById("showUsers").innerHTML='';
  let user_data=new Array();
  user_data=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
  if(user_data)
  {
    for(let i=0;i<user_data.length;i++)
    {
    let addDiv=document.createElement('div');
    addDiv.className="row";
    addDiv.innerHTML='<div class="col-sm-4">'+user_data[i].name1+'</div><div class="col-sm-4">'+user_data[i].age+'</div><div class="col-sm-4">'+user_data[i].salary+'</div><div class="col-sm-4">'+user_data[i].email+'</div><div class="col-sm-4">'+user_data[i].remarks+'</div>';

    
    document.getElementById("showUsers").appendChild(addDiv);

    }
  }
}

submit.addEventListener('click', form);
submit.addEventListener('click', clean);

