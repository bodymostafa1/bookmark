var sitename = document.getElementById("sitename");
var url = document.getElementById("url");
if (localStorage.getItem('sites') != null) {
    Datacontainer = JSON.parse(localStorage.getItem('sites'))
    showwebsite(Datacontainer)
 }
 else {
    Datacontainer = [];
 }
function addwebsite(){
    data ={
        sitename: sitename.value,
        url: url.value
    }
    Datacontainer.push(data)
    localStorage.setItem("sites",JSON.stringify(Datacontainer))
    showwebsite(Datacontainer)
}
function openlink(index){
    window.open(Datacontainer[index].url,"_blank")
}
function showwebsite(data){
    list =``
    for( i=0;i<data.length;i++){
        list += `<tr>
        <td>${i+1}</td>
        <td>${data[i].sitename}</td>              
        <td>
          <button class="btn btn-visit btn-success text-white px-2" onclick="openlink(${i})" >
            <i class="fa-solid fa-eye pe-2"></i>
            visit
          </button>
        </td>
        <td>
          <button class="btn btn-delete btn-danger text-white px-2"onclick="deletesite(${i})">
            <i class="fa-solid fa-trash-can pe-2"></i>
            Delete
          </button>
        </td>
    </tr>
        `
    }
    document.getElementById("tablecontent").innerHTML = list;
}
function deletesite(index){
Datacontainer.splice(index,1)
showwebsite(Datacontainer)
localStorage.setItem("sites",JSON.stringify(Datacontainer))
}
