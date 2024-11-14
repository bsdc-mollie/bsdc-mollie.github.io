console.log("bob")

const bob = document.getElementById("bob");
console.log(bob.innerHTML);



let hidebob = false;

function byebye(){
    if (hidebob) {
        bob.innerHTML='<h1>yes</h1> <img src="bobinarob/bob2-removebg-preview.png" alt="">';

    } else{
        bob.innerHTML ='<h1>can</h1> <img src="bobinarob/bob1-removebg-preview.png" alt="">';
    }
    hidebob = !hidebob;
}