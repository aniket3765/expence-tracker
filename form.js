const form = document.querySelector('#btn');
const name= document.querySelector('#amount');
const email = document.querySelector('#descri');
const msg = document.querySelector(".msg");
const userList = document.querySelector('#user')


document.getElementById("items").addEventListener('click', removeItem);
document.getElementById("items").addEventListener('click', editItem);
form.addEventListener("click", onsubmit);
function onsubmit(e){
    e.preventDefault();

   if(name.value==='' || email.value===''){
      msg.classList.add("alert");
   msg.innerHTML = "Please enter your Name and email";
    setTimeout(()=> msg.remove(),3000);
   } 
   else{
 // Create new li element
  var li = document.createElement('li');
  var sel = document.getElementById("category");
var text= sel.options[sel.selectedIndex].text;
 
  // Add text node with input value
  li.appendChild(document.createTextNode(name.value+" "+email.value+" "+text));

  // Append li to list
  document.getElementById("items").appendChild(li);

  var deleteBtn = document.createElement('input');
  deleteBtn.setAttribute('type','button' );
  deleteBtn.setAttribute('value','delete');

  var editbtn = document.createElement('input');
  editbtn.setAttribute('type','button' );
  editbtn.setAttribute('value','edit');

  // Add classes to  button
  editbtn.className = 'btn btn-info btn-sm edit';
  deleteBtn.className = 'btn btn-danger btn-sm delete';

  // Append button to li
  li.appendChild(editbtn);
  li.appendChild(deleteBtn);


    let obj = {
        name : name.value,
        email : email.value
    };
    let newObj = JSON.stringify(obj);
      localStorage.setItem(name.value,newObj);
     name.value= "";
     email.value= "";

     let obj2 = JSON.parse(localStorage.getItem(newObj));
     

   }
   }
   
function removeItem(e){
    if(e.target.classList.contains('delete')){
     
        var li = e.target.parentElement;
        document.getElementById("items").removeChild(li);
      }
    }
    function editItem(e){
        if(e.target.classList.contains('edit')){
            let li = e.target.parentElement;
            let text_node = li.textContent;
            let arr = text_node.split(" ");
            let obj = JSON.parse(localStorage.getItem(arr[0]));
            name.value = obj.name;
            email.value = obj.email;
            localStorage.removeItem(arr[0]);
            document.getElementById("items").removeChild(li);
        }
    }
