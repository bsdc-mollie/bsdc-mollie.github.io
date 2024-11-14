console.log("pokemon")

const container = document.querySelector('#container');
console.log(container.innerHTML)

// const newImg = document.createElement('img')
// newImg.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"

// container.appendChild(newImg)

// console.log(newImg)

for(i = 1; i <=1025; i++) {
    const newImg = document.createElement('img')
newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

container.appendChild(newImg)

console.log(newImg)
}