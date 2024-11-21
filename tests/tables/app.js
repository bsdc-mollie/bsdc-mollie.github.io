console.log("table?")

const ac = [
    {name:"Spyro", element :"Magic", game:"Spyro's Adventure"},
    {name:"Enigma", element:"Magic", game:"Trap Team"},
    {name:"Trigger Happy", element:"Tech", game:"Spyro's Adventure"},
    {name:"Cynder", element:"Undead", game:"Spyro's Adventure"},
    {name:"Wolfgang", element:"Undead", game:"Imagionators"},
    {name:"Chop Chop", element:"Undead", game:"Giants"},
];
 
const skylandersTable = document.getElementById('skylanders');
console.log(skylandersTable);
 
// const newac = document.createElement('tr');
// console.log(newac)
// newac.innerHTML = `<td>${ac[0].name}</td><td>${ac[0].element}</td><td>${ac[0].game}</td>`;
// console.log(newac)
 
// skylandersTable.appendChild(newac);
 

for(i=0;i<ac.length;i++) {
   const newac = document.createElement('tr');
console.log(newac)
newac.innerHTML = `<td>${ac[i].name}</td><td>${ac[i].element}</td><td>${ac[i].game}</td>`;
console.log(newac)
 
skylandersTable.appendChild(newac);
 
}