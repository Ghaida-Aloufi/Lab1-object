



Available=true;
let user ={
  name:"Ghaida", 
  email:"ghaida2219@gmail.com",
  Id:3, 
  Available:false,

  check:function(){
    if(Available==true){
      return "available for work"
    }else{
      return "Not available for work"

    }
  },
  
 address:{
  ksa:"jeddah",
  Egypt:{
    one:"cairo",
    two:"giza"
  },
  medina:{
   one:"azizia",
   two:"alhamra"
  }

 },

skills:["HTML","CSS","JS"]
};



console.log(user);
console.log(user.name);
user.Id=6
console.log(user.Id);
delete user.email;
console.log(user);

Available=true;
console.log(user.check());

console.log(user.address);
console.log(user.address.ksa);
console.log(user.skills[2]);

console.log(user.skills.join("  "));
