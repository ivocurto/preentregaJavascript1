let intentos = 3;

for(let i=1;i<=3;i++){
     let usuario=prompt("Ingresa tu nombre de usuario");
     let password=prompt("Ingresa tu contraseña");

     if((usuario=="Ivo")&&(password="1234")){
         alert("Bienvenido al sistema");
         break;
     }else{
         intentos = intentos - 1;
        alert(`Usuario y/o contraseña incorrecta pruebe con el usuario "Ivo" y la contraseña "1234", te quedan `+intentos+` intentos` );
     }
}

function calcularEdad(){
    const age=2022;
    let nacimiento=parseInt(prompt("Antes de comenzar, ingresa el año en que naciste"));
    let edad=age - nacimiento;
    alert("Tenes "+edad+" años");
}

calcularEdad();


// minutos en el gim de descanso
let repeticiones = parseInt (prompt("Ingrese la cantidad de repeticiones que hizo o debe hacer"));

if(repeticiones < 1) {
    alert("El mínimo de repeticiones es 1");
} 
else if(repeticiones <= 5){
    alert("Descansa 5 minutos");
}
else if(repeticiones <= 8) {
    alert("Descansa 4 minutos");
}
else if(repeticiones <= 10) {
    alert("Descansa 3 o 4 minutos");
}
else if(repeticiones <= 14) {
    alert("Descansa 3 minutos");
}
else if(repeticiones > 15) {
    alert("Descansa 2 minutos");
}
else{
    alert("Por favor ingrese un número");
} 