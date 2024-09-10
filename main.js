
//Lab1


// Available=true;
// let user ={
//   name:"Ghaida", 
//   email:"ghaida2219@gmail.com",
//   Id:3, 
//   Available:false,

//   check:function(){
//     if(Available==true){
//       return "available for work"
//     }else{
//       return "Not available for work"

//     }
//   },
  
//  address:{
//   ksa:"jeddah",
//   Egypt:{
//     one:"cairo",
//     two:"giza"
//   },
//   medina:{
//    one:"azizia",
//    two:"alhamra"
//   }

//  },

// skills:["HTML","CSS","JS"]
// };



// console.log(user);
// console.log(user.name);
// user.Id=6
// console.log(user.Id);
// delete user.email;
// console.log(user);

// Available=true;
// console.log(user.check());

// console.log(user.address);
// console.log(user.address.ksa);
// console.log(user.skills[2]);

// console.log(user.skills.join("  "));




//Lab2


characters = [
  {
    name: "Luke Skywalker",
    height: 177,
    gender: "male",
    mass: 77,
    eye_color: "brown",
  },
  {
    name: "Leia Organa",
    height: 160,
    gender: "female",
    mass: 56,
    eye_color: "blue",
  },
  {
    name: "Han Solo",
    height: 180,
    gender: "male",
    mass: 80,
    eye_color: "brown",
  },
  {
    name: "Chewie",
    height: 222,
    gender: "male",
    mass: 190,
    eye_color: "black",
  },
  {
    name: "kevien",
    height: 106,
    gender: "male",
    mass: 32.2,
    eye_color: "red",
  },
];
let u = characters.find((e )=> e.eye_color==="blue").name;
console.log(u);

let f = characters.find((e )=> e.mass>50).gender;
console.log(f);

let x = characters.filter(e => e.height < 200);
console.log(x);

let y= characters.filter(e => e.gender =="male");
console.log(y);


let z = characters.map(e => e.name);
console.log(z);

let w = characters.map(e => e.height);
console.log(w);



let d = characters.slice().sort((low, high) => low.mass - high.mass);
console.log(d);


let k = characters.slice().sort((low, high) => high.mass - low.mass);
console.log(k);



let a = characters.every(e => e.mass > 40);
console.log(a);

let p = characters.every(e => e.height < 200);
console.log(a);


let o= characters.some(e => e.eye_color==="blue");
console.log(o);


let c= characters.some(e => e.height>210);
console.log(c);


