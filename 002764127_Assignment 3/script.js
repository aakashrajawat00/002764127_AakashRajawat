//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");




var table = document.getElementById('myTable')

//Add rows
var student = 4;
function Addedrow(){
  table.innerHTML += '<tr><td><input class="checksetup" type="checkbox" onchange="checker(this)"/> <br /><br /><button onclick="dropDown(this)" class="dropDown"><img src="down.png" width="25px" /></button></td><td>Student '+student+'</td><td>Teacher '+student+'</td><td>Approved</td><td>Fall</td><td>TA</td><td>12345</td><td>100%</td><td class="hideDisplay"><button onclick="deleteRow(this)">Delete</button></td><td class="hideDisplay"><button onclick="editRow()">Edit</button></td></tr><tr class="dropDownTextArea"><td colspan="8">Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br /></td></tr>';
  student++;
  alert("Student "+ (student-1)+ " Added")
}

y = document.getElementsByTagName('tr');


//Toggle list
function dropDown(currentRow){
  var h = currentRow.parentNode.parentNode.rowIndex
  var h=h+1
    if (y[h].style.display=='none' || y[h].style.display==""){
      y[h].style.display = 'table-row';
    }
    else{
      y[h].style.display = 'none';
    }

  }


//Delete and edit buttons


function editRow(){
  prompt("Enter the Changes")
}

function deleteRow(row){
  var RowIndex = row.parentNode.parentNode.rowIndex;

  table.deleteRow(RowIndex);
  table.deleteRow(RowIndex)
  var n = document.getElementById('button')
  var RowLen = table.rows.length;
  var Hidedis = document.getElementsByClassName('hideDisplay')
  student--
  for(jd=0;jd<RowLen;jd++){
    if(RowLen == 1){
      Hidedis[0].style.display = 'none'
      Hidedis[1].style.display = 'none'
      n.style.backgroundColor = 'grey'
      break
    }
    if(y[jd].style.backgroundColor == 'yellow'){
      Hidedis[0].style.display = 'table-cell'
      Hidedis[1].style.display = 'table-cell'
      n.style.backgroundColor = 'orange'
      break
    }
    else{
      Hidedis[0].style.display = 'none'
      Hidedis[1].style.display = 'none'
      n.style.backgroundColor = 'grey'
    }
  }
  alert("Deleted Succesfully")
}



function checker(q){
  var x = q.parentNode.parentNode.rowIndex;
  var RowLen = table.rows.length;
  var Hidedis = document.getElementsByClassName('hideDisplay')
  z =y[x].getElementsByTagName('td');
  k =z[0].getElementsByClassName('checksetup');
  var n = document.getElementById('button')
  if(k[0].checked == true){
    y[x].style.backgroundColor = 'yellow'
    z[8].style.display = 'table-cell'
    z[9].style.display = 'table-cell'
  }
  else{
    
    y[x].style.backgroundColor = ''
    z[8].style.display = 'none'
    z[9].style.display = 'none'
  }
  for(jd=0;jd<y.length;jd++){
    if(y[jd].style.backgroundColor == 'yellow'){
      Hidedis[0].style.display = 'table-cell'
      Hidedis[1].style.display = 'table-cell'
      n.style.backgroundColor = 'orange'
      break
    }
    else{
      Hidedis[0].style.display = 'none'
      Hidedis[1].style.display = 'none'
      n.style.backgroundColor = 'grey'
    }

  }
}









