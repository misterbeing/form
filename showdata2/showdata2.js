
        const submit = document.getElementById('submit_form');
        
        var employeeArray = [];
        
        function init(){
            var table = document.getElementById("tablerows").innerHTML=" ";
            if(localStorage.employeeRecord) {
                employeeArray = JSON.parse(localStorage.employeeRecord);
                for (var i=0 ; i< employeeArray.length; i++)
                {
                    prepareTableCell(i,employeeArray[i].name1, employeeArray[i].age ,employeeArray[i].salary,employeeArray[i].email,employeeArray[i].remarks);
                }
            }
        }

        function onregisterPressed (){
            var name1 = document.getElementById("name_input").value;
            var age = document.getElementById("age_input").value;
            var salary = document.getElementById("salary_input").value;
            var email = document.getElementById("email_input").value;
            var remarks = document.getElementById("textarea").value;
        


                var stuObj = {name1: name1,age:age,salary:salary,email:email, remarks:remarks};

                if (name1=="")
                {
                    document.getElementById("name").innerHTML="*name cant be empty";
                }
                if (age=="")
                {
                    document.getElementById("age").innerHTML="*age cant be empty";
                }
                if (salary=="")
                {
                    document.getElementById("salary").innerHTML="*salary cant be empty";
                }
                if (email=="")
                {
                    document.getElementById("email").innerHTML="*email cant be empty";
                }

                else{
                employeeArray.push(stuObj);
                localStorage.employeeRecord = JSON.stringify(employeeArray);
                alert("data recorded succesfully , insert another data")
                }
                

                // prepareTableCell(name1,age,salary,email,remarks)
                init();
                document.getElementById("name_input").value="";
                document.getElementById("age_input").value="";
                document.getElementById("salary_input").value="";
                document.getElementById("email_input").value="";
                document.getElementById("textarea").value="";

                
                
            }


            function clean ()
            {
            document.getElementById('name_input').value = "";
            document.getElementById('age_input').value= "";
            document.getElementById('salary_input').value ="";
            document.getElementById('email_input').value= "";
            document.getElementById('textarea').value="";
            document.getElementById('name').value="";
            
            }

             function prepareTableCell (index,name1,age,salary,email,remarks){
            

            var table = document.getElementById("tablerows");
            var row = table.insertRow();
            var nameCell = row.insertCell(0);
            var ageCell = row.insertCell(1);
            var salaryCell = row.insertCell(2);
            var emailCell = row.insertCell(3);
            var remarksCell = row.insertCell(4);
            var actionCell = row.insertCell(5);

            nameCell.innerHTML = name1;
            ageCell.innerHTML = age;
            salaryCell.innerHTML=salary;
            emailCell.innerHTML=email;
            remarksCell.innerHTML=remarks;
            actionCell.innerHTML='<button onclick = "deleteTableRow('+index+')">delete</button>';

        }

        function deleteTableRow(index){
            var table = document.getElementById("regtable");
            table.deleteRow(index+1);
            employeeArray.splice(index,1);
            localStorage.employeeRecord=JSON.stringify(employeeArray);
            init();
        }

        submit.addEventListener('click', onregisterPressed);
        submit.addEventListener('click', clean);