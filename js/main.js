const fondo = document.getElementById('fondo');
document.getElementById('button').addEventListener('click', ()=>{
    fondo.classList.toggle("fondo");
})
document.getElementById('fondo').addEventListener('click',()=>{
    fondo.classList.remove("fondo");
})
