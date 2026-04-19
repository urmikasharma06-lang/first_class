let s= document.getElementById("select");
let i=document.querySelector("img");

s.addEventListener('change',()=>{
    if(s.value=='Tiger'){
        i.src="https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRpZ2VyfGVufDB8fDB8fHww"
    }
    else if(s.value=='Lion'){
        i.src="https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlvbnxlbnwwfHwwfHx8MA%3D%3D "
    }
})