/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  let devs = arr.map((person) => {
    if(person.profession == "developer"){
      return person;
    }
    else {
      return null;
    }
  }).filter((person) => {
    return person !== null;
  })
  console.log(devs);
}

//------------------------------------//

function PrintDeveloperbyForEach() {
  let dev = [];
  arr.forEach((person) => {
    if(person.profession == "developer"){
      dev.push(person);
    }
  })
  console.log(dev);
}

//-------------------------------------//

function addData() {
  let obj = {id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(obj);
  console.log(arr);
}

//----------------------------------//

function removeAdmin() {
  let dev = arr.filter((person) => {
    return person.profession == "developer";
  })
  console.log(dev)
}

//---------------------------------//

function concatenateArray() {
  let arr1 = [
    { id: 4, name: "sova", age: "25", profession: "developer" },
    { id: 5, name: "yoru", age: "23", profession: "developer" },
    { id: 6, name: "harbour", age: "22", profession: "admin" },
  ]
  console.log(arr.concat(arr1));
}
