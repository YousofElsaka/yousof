import express from 'express';
const app = express();
const students=[

{
  id: 1,
  name: "yousof",
  city: "Mansora"

},
{
  id: 2,
  name: "elsaka",
  city: "Shebeen"
},
{
id: 3,
name: "yousri",
city: "tanta" 

},
{
 id: 4,
 name: "yousof",
 city: "cairo"
}

];



 

const studentsFunction = (request , response) =>{
let output = '<ul>'

for(let i=0; i< students.length;i++){
const student =students[i];
output += "<li>" + student.name + "</li>";

}


output += '</ul>';

response.send(output)

};

app .get('/Students', studentsFunction)

 
app.listen(4000, "0.0.0.0");

