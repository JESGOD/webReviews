const resumenes =[
    {
        id:1,
        nombre: "Jonny Esteban Samboni Muñoz",
        trabajo: "Desarrollador Web",
        img: "https://scontent.fclo1-4.fna.fbcdn.net/v/t1.6435-9/82248485_2540079789582794_6419873439091261440_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=68udjB2wRcQAX9E6dmr&tn=G_oOLD9irI-GOrhC&_nc_ht=scontent.fclo1-4.fna&oh=00_AfBhZkb84aatJBOzMOGS2rXfQiqZjA_K_ZP3m-AiJMW9iw&oe=63896CD7",
        texto: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex minus sequi pariatur incidunt voluptatibus numquam dicta, officiis, explicabo eveniet cum illum blanditiis molestias atque. Saepe voluptates dolore architecto impedit temporibus, explicabo fugiat voluptatibus vel nostrum corrupti quia assumenda, debitis minus blanditiis labore",
        
    },
    {
        id:2,
        nombre: "Henry Estacio Yimez",
        trabajo: "desarrolador movil",
        img: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        texto: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla iure iste pariatur reprehenderit quos asperiores eveniet eum. Earum molestias fugiat velit minima quaerat esse vel nostrum laboriosam maiores soluta. Officia totam consequuntur sequi laborum, facilis hic asperiores sit ea repellat qui autem, distinctio voluptas aliquid possimus eligendi et corporis, fuga sed commodi in! Consequatur explicabo quos eveniet est sed! Inventore nostrum cum repudiandae facere atque enim ullam quis doloremque, nemo possimus maiores porro adipisci perspiciatis quod temporibus delectus ",
    },
    {
        id:3,
        nombre:"Susan Smith",
        trabajo:"Experta en java",
        img:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        texto:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet omnis architecto dolores fugit delectus placeat sed quam veritatis, maxime eligendi, enim id, velit distinctio adipisci quo modi dicta animi perspiciatis. Molestiae omnis earum nostrum numquam rem, unde cupiditate qui quod tempore provident itaque nulla, suscipit vero quae tempora impedit fuga sunt quibusdam ex, repellat illum commodi. Deleniti perspiciatis a distinctio. Ab ipsum explicabo et voluptatum unde consequatur, quibusdam similique optio esse amet, id vitae provident error illum numquam, beatae ipsa ",
    },
    {
        id:4,
        nombre:"Andrea Rojas",
        trabajo:"Diseñadora Grafica",
        img:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
        texto:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rem ipsam dignissimos amet blanditiis veniam error, consequuntur, veritatis enim assumenda earum similique, culpa laboriosam cum ut commodi itaque nesciunt cupiditate. Dolorum, sed eligendi! Exercitationem praesentium ducimus laborum tempora explicabo aut ea nam beatae adipisci animi, amet culpa quis, libero porro natus deleniti suscipit vel iste. Ex perferendis quo quae blanditiis. Animi nisi, id excepturi culpa esse, iure autem laboriosam nemo, architecto illo consequatur perferendis consequuntur veniam",
    }
];

const btns = document.querySelectorAll("button");
const fotoPerfil = document.getElementById("perfil1");
const nombre = document.getElementById("nombre");
const trabajo = document.getElementById("trabajo");
const info = document.getElementById("info");
btns[0].addEventListener("click",atras);
btns[1].addEventListener("click",adelelante);
btns[2].addEventListener("click",perfilAleatorio);


let perfilActual= 0;
window.addEventListener("DOMContentLoaded", function(){ //sirve oara que se ejecute una funcion sin necesidad de que se haya terminado de cargar por completo la pagina
    recorrerInfoPerfiles(perfilActual);
})
function recorrerInfoPerfiles(){
    const itemActual = resumenes[perfilActual];
    fotoPerfil.src =itemActual.img;
    nombre.innerText= itemActual.nombre;
    trabajo.innerText= itemActual.trabajo;
    info.innerText= itemActual.texto;
}
function atras(){
    perfilActual --;
    if(perfilActual < 0  ){
        perfilActual= 0;
    }
    recorrerInfoPerfiles();
    
}

function adelelante(){
    perfilActual ++;
    if( perfilActual > resumenes.length-1 ){
        perfilActual= resumenes.length-1;
    }
    recorrerInfoPerfiles();  
}

function perfilAleatorio(){
    perfilActual = 0 + Math.floor(Math.random()*resumenes.length); // 0 = rango inicial + nuero random entero*rango final(sin tomarlo 4: el rango lelga hasta 3)
    console.log(perfilActual);
    recorrerInfoPerfiles();
    
}
