//Trazer no console os titulos por classe
let titulos = document.getElementsByClassName('titulo');
console.log(titulos)

//Trazer no console os titulos por array
let titulosArray =  Array.from(titulos);
console.log(titulosArray)

//Pegando o item,index e o array por uma função
titulosArray.forEach(function(item,index,array)
{
    console.log(item,index,array);
});

//Trazer todas as imagens
let imagens = document.querySelectorAll('img');
console.log(imagens)

//Trazer as imagens usando arrow function
let i = 0;
imagens.forEach(() => console.log(i++)); 

//Trazer todas os paragrafos do texto
let paragrafos = document.querySelectorAll('p');
console.log(paragrafos)

paragrafos.forEach((item) =>
{
    console.log(item.innerHTML);
});

//Mostra a distancia do topo ate a primeira imagem
let img = document.querySelector('img')
const imgTop = img.offsetTop;
console.log(imgTop)
