showData();

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

