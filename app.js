
let cuentas = [
    { nombre: "Hiromi", saldo: 200, password: 'helloworld' },
    { nombre: "Luis", saldo: 290, password: 'l33t' },
    { nombre: "Carlos", saldo: 67, password: '123' }
  ];

   let posicionUsuario ;
   let dinero;
  document.getElementById("acciones").style.display = "none";
  document.getElementById("incorrect_user").style.display = "none";
  document.getElementById("correct_user").style.display = "none";
  document.getElementById("info").style.display = "none";
  document.getElementById("presentacion").style.display = "none";


  function ingresar() {

     
      let usuario = document.getElementById("usuario").value;
      let contrasenia = document.getElementById('contrasenia').value;
      
      validarUsuarioLogin(usuario, contrasenia);
  }
  
  function validarUsuarioLogin (usuario, contra) {
      let usuarioValido = false;
      for(let i = 0; i < cuentas.length; i++) {
          if(usuario === cuentas[i].nombre && contra === cuentas[i].password) {
 
              document.getElementById("correct_user").style.display = "block";
              document.getElementById("presentacion").style.display = "block";
              usuarioValido = true;
              mostrarMenuHTML(i)
              posicionUsuario = i;
              return
          }
      }

      if(!usuarioValido) {
        document.getElementById("incorrect_user").style.display = "block";
      }
  }
  
  function mostrarMenuHTML(posicionUsuario){
  
      document.getElementById("inicio").style.display = "none";
  

      document.getElementById("acciones").style.display = "block";
      document.getElementById("info").style.display = "block";

      document.getElementById("nombre-usuario").innerText = cuentas[posicionUsuario].nombre
  
      document.getElementById("consultar").addEventListener('click', function () {

          document.getElementById("info").innerText = 'El saldo actual es de: $' + cuentas[posicionUsuario].saldo;
      } );
  

  }
  function retirosexacto(){
    let retirarmoneys = document.getElementById("retirarmoneys").value;
    let saldototal  = cuentas[posicionUsuario].saldo - retirarmoneys;
    if( saldototal <= 10){
    document.getElementById("info").innerText =  'Ingresa una nueva cantidad';
    }else{
        document.getElementById("info").innerText =  'El saldo actual es de: $' + saldototal + ' por un retiro de $' + retirarmoneys;
    }
  }

  
  function ingresarSaldoHTML() {
    let agregarmoneys = document.getElementById("agregarmoneys").value;
    let saldototals  = Number(cuentas[posicionUsuario].saldo) + Number(agregarmoneys);
    if(saldototals >= 990){
    document.getElementById("info").innerText =  'Es imposible agregar tu cantidad, estas superando el deposito permitido';
  }else{
    document.getElementById("info").innerText =  'El saldo actual es de: $' + saldototals + ' por un deposito de $' + agregarmoneys;
  }
}