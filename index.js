//                  Entrada y salida de información

// let entrada = prompt("Ingrese su nombre: ");
// alert (entrada);
// console.log(entrada);

//                  Variables
// VAR es una variable global
// LET es una variable local
// CONST solo pueden ser accedidas dentro del bloque
//       donde esta definida y su contenido es inmutable.

//                  Metodos de Strings
// string.toUpperCase()             retorna el mmismo texto con las letras mayusculas
// string.toLowerCase()             retorna el mismo texto con las letras minusculas
// String.length()                  retorna la cantidad de letras del texto   
// string.repeat(n)                 retorna un texto pedido n veces
// string.replacce( str1 , str2 )   retorna un texto reemplazando el str1 por el str2

//                  Parsers
//parseInt()    parseFloat()        son funciones creadas para analizar un string y devolver un numero si es posible
//                                  solo si las cifras estan al principio del string, si no estan al principio, es ignorada.
//                                  En caso de no haber un numero en los primeros cifras se devolvera "NaN"(Not a Number)
// Number()                         ignora los espacios al principio y al final. Si una string contiene caracteres no convertibles
//                                  a numeros el resultado siempre es NaN
//                                  Podemos convertir booleanos a numero. False = '0'   True = '1'

//                    Asignacion
// var numero = 17;
// numero +=  10; //27
// numero -=  10; //7
// numero *=  10; //170
// numero /=  10; //1.7
// numero %=  10; //7
// numero **= 10  //2015993900449

//                  Comparacion
// Valida solo valor
// var resultado = 10 == '10';  Igualdad simple
// var resultado = 20 != '20';  Desigualdad simple
// Valida valor y tipo de dato
// var resultado = 10 === '10'; Igualdad estricta
// var resultado = 20 !== '20'; Desigualdad estricta

//                  Incremento y Decremento
// var numero = 10;

// numero++; Primero lee la variable (10) y luego la incrementa(11)
// ++numero; Primero incrementa la variable (11) y luego la lee(11)
// numero--; primero lee la variable (10) y luego la decrementa(9)
// --numero; primero decrementa la variable (9) y luego la lee(9)

//                  Else If

// if( 10 > 6 ){

// }else if( 3 < 7 ){

// }else{

// }

//                  Switch

// let condicion = 'blue';

// switch(condicion){
//     case 'red':
//         console.log('El saco es rojo');
//         break;
//     case 'blue':
//         console.log('El saco es azul');
//         break;
//     case 'yellow':
//         console.log('El saco es amarillo');
//         break;
//     default:
//         console.log('No tengo ese color');
//         break;
// }

//              Operacor Ternario
// Es util cuando tenemos condiciones tipo if/else, es decir, dos valores posibles
// let numero = 23;
// let resultado = numero >= 13 ? 'Es mayor que 13' : 'Es menor que 13';
// Lo que sigue del '?', sera el valor de retorno si la condicion es verdadera y lo
// que sigue luego de ':' cuando la condicion resulte falsa

//          Otros operadores  condicionales
// AND                  a && b      Devuelve a si es false, sino devuelve b
// ?:                   a ? b : c   Si es true, devuelve b,  sino devuelve c
// OR                   a || b      Devuelve a si es true, sino devuelve b
// Nullish coalescing   a ?? b      Devuelve b si a es null o undefined, sino devuelve a
// ??=                  a ??= b      Es equivalente a ?? ( a = b )

//              Funciones

// Funcion declarada
// function sumar( a , b ){
//      c = a + b;
//      Return c;
// }


// Funcion Expresada / Anonima
// const sumar = function ( a , b ) {
    // c = a + b;
    // Return c;
// }

// Para invocarlas:
// sumar();

// let suma1 = sumar( 5 , 3);
// let suma2 = sumar( 7 , 32 );

//          Arrows Functions
// En una sola linea
// const sumar = ( a , b ) => a + b;    // '=>' con este simbolo queda implicito el Return
// Mas de una linea
// const sumar = ( a , b ) =>{          //El return es opcional
//     let c = a + b;
//     console.log('El valor es ' + c);
//     return c;
// }

//                  Callbacks

// Callbacks sincronicos
// Pasaremos una funcion como parametro para ser utilizada dentro de mi otra funcion

// const sumar = ( a , b , accion) =>{
//     let resultado = a + b;
//     accion('El resultado retornado es ' + resultado);
//     return resultado;
// }

// sumar( 10 , 12 , console.log);
// sumar( 20 , 14 , alert);
// sumar( 8 , 4 , otraFuncion);

//                         Array

// const frutas = [ 'manzana' , 'pera' , 'banana' , 'fresa'];
// console.log(frutas[2]);      //banana
// console.log(frutas.at(1));   //pera

// const datos = [ 'pera' , 2 , true , 'hola soy adrian'];
// console.log(datos.length);    //4

//                  Array Methods

//-------------Eliminar y colocar elementos

// push()      Agrega un valor al final y retorna el nuevo length
//          frutas.push('anana');

// unshift()   Agrega un valor al principio y retorna el nuevo length
//          frutas.unshift('mandarina');

// pop()        Elimina el ultimo valor y lo retorna 
//          frutas.pop();

// shift()      Elimina el primer valor y lo retorna
//          frutas.shift();

//------------------------ Concatenar elementos

// contact()    //combina dos o mas arrays

// const precio_remeras = [ 100 , 223 , 313 ];
// const precio_medias = [ 12 , 23 , 43];
// const precios = precio_remeras.concat(precio_medias);
// console.log(precios);        //[100 , 223 , 313 , 12 , 23 , 43]

// join()       //Crea una cadena de texto a partir de todos los valores de un array
// frutas.join('-');
// console.log(frutas);
// 'manzana - pera - banana - fresa'

// ------------------------Separar o cortar

// split()          //creamos un array a partir de un string
//      const nombres = 'Julieta , carlos , pedro';
//      nombres = nombres.split(',');
//      console.log(nombres);  // ['Julieta' , 'carlos' , 'pedro']

// slice()          //devuelve una porcion del array desde un rango definido
//      const animales = ['pato' , 'perro' , 'gato' , 'loro' , 'puma'];
//      console.log(animales.slice( 2 ,4 ));        //['gato' , 'loro']

//                      Ordenar

// sort()           //ordena los elementos alfabeticamente un array. Solo sirve con texto ya que pondria al 1 junto a 100
//      const animales = ['pato' , 'perro' , 'gato' , 'loro' , 'puma'];
//      console.log(animales.sort());   //  ['gato , 'loro' , 'pato' , 'perro' , 'puma']

// sin embargo podemos usar este truco para numeros
//      const precios = [ 23 , 34 , 36 , 32 , 12];
//      precios.sort(( a , b ) => a -b);        //[12 , 23 , 32 , 34 , 36]

//---------------------Array Functions

// Son metodos de array que originalmente reciben una funcion de callback por parametro para obtener cierto resultado

//                  Iterador
// forEach()        //este metodo no retorna ningun valor, sino que solo se limita a ejecutar el callback
//                    que le pasemos por cada elemento del array
//          const arr = [1,2,3,4,5,6];
//          arr.forEach(item => {
//              console.log(item);  //output: 1,2,3,4,5,6
//          });

//----------------------Valiladores
// every()          //verifica si todos los elementos en el arreglo pasan la prueba implementada por la funcion dada
//          const arr = [1,2,3,4,5,6];
//          const greater_four = arr.every( num => num > 4); //verifica si todos los elementos son mayores a 4
//          console.log(greater_four);  //output: false

//          const less_ten = arr.every(num => num < 10);
//          console.log(less_ten);  //output: true

// some()           //verifica si al menos uno de los elementos pasa la prueba implementada por la funcion dada
//          const arr = [1,2,3,4,5,6];
//          const large_num = arr.some( num => num > 4);    //al menos un elemento menor a 4
//          console.log(large_num);     //output: true

//          const small_num = arr.some(num => num <= 0);
//          console.log(small_num);     //output: false

// -----------------------Reductores

// reduce()         se ejecuta por cada elemento del array y va acumulando en una variable el valor anterior
//                  sumando el valor actual de esa iteracion
//          const arr = [1,2,3,4,5,6];
//          const suma = arr.reduce(( total , value) => total + value, 0);
//          console.log(sum);   //21

// -------------------Transformador
// map()            crea un nuevo arreglo con el resultado de la funcion de callback pasada por parametro
//          const arr = [1,2,3,4,5,6];
//          const one_added = arr.map(num =>  num + 1);
//          console.log(one_added);     //output: [2,3,4,5,6,7]
//          console.log(arr);           //output: [1,2,3,4,5,6]

//--------------------Filtro
// filter()         filtra los elementos que cumplen cierta condicion. Podriamos usarlo cuando tenemos un array y necesitamos
//                  filtrar datos
//          const arr = [1,2,3,4,5,6];
//          const filtered = arr.filter(num => num >  3);
//          console.log(filtered);      //output: [4,5,6]
//          console.log(arr);           //output: [1,2,3,4,5,6]

// ------------------Buscador
// find()           busca en un arreglo segun una condicion y devuelve el  primer valor que logre cumplirla
//          const precios = [234,234,455];
//          precios.find((precio) => precio > 300);     //455


// --------------------------------------Obejetos-------------------------------------
// Es un tipo de dato que nos permite crear colecciones de variables, pero que a diferencia de los arrays,
// estas se encuentran identificadas mediante una clave en lugar de un indice

//          const superhero = {
//              alias: 'Batman';
//              nombre: 'Bruce';
//              apellido: 'Wayne';
//              universo: 'DC';
//          }

// Atributos de las propiedades:
// 1_   VALUE: valor de la propiedad en cuestion.
// 2_   CONFIGURABLE: nos permite definir si los atributos de la
//                    propiedad van a poder ser modificados.
// 3_   ENUMERABLE: controla si la propiedad va a ser mostrada cuando
//                  se enumeran las propiedades del objeto.
// 4_   WRITABLE: nos permite definir si el valor de una propiedad va a  
//                poder ser modificado o no.

// Para acceder a los atributos usamos:
// Object.getOwnPropertyDescriptor(target,propiedad):   donde target es el atributoque deseamos ver de esa propiedad
// Object.defineProperty(myObject , propiedad , {atributos}):   lo usamos para definir una propiedad en especifico.

// Para acceder a las propiedades usamos:
// Object.keys():   devuelve un arreglo que contiene todos los nombres de las propiedades.
// Object.values(): devuelve un arreglo que contiene todos los valores correspondientes a las propiedades.


// Acceder 
// a las propiedades de un objeto a traves del puntos o  los corchetes
    //  const mascota = {
    //      nombre: 'Ayvar',
    //      familia: 'perro',
    //      raza: 'caniche',
    //      peso: 3000,
    //      edad: '7 meses',
    //  };

    //  console.log(mascota.nombre); //Ayvar
    //  console.log(mascota.peso);   //3000
    //  console.log(mascota['familia']);    //perro
    //  console.log(mascota['edad']);   //7 meses

// Añadir propiedades
    //  mascota.color = 'blanco';
    //  console.log(mascota);


// Recorrer un objeto
// For in:
//      var obj = {a: 1 , b: 2 , c: 3};
//      for (const prop in obj){
//          console.log(`obj.${prop} = ${obj[prop]}`);        
//      }
//      output:
//      "obj.a = 1"
//      "obj.b = 2"
//      "obj.c = 3"

// ------------------Metodos
// Se conocen con este nombre a las funciones que declaramos dentro de un objeto y bien
// ya hemos utilizado otros metodos a lo largo del curso ahora veremos como se declaran
// en un objeto propio

// En este caso declaramos una propiedad llamada saludar y le asignamos una funcion que 
// imprime por consola el valor de la propiedad sonido.
// El uso de la palabra reservada "this", hacce referencia a que "sonido" es parte del mismo
// objeto y no un valor externo.

//          const mascota = {
//              nombre: 'Ayvar',
//              familia: 'perro',
//              raza: 'caniche',
//              peso: 3000,
//              edad: '7 meses',
//              sonido: 'guau guau!',
//              saludar: function() {console.log(this.sonido)}
//          };
//          mascota.saludar();

// -----------------Otros objetos
// Objetos funcionales

// Se crean   a partir de funciones y nos permiten definir "moldes" para luego poder
// realizar copias de nuestros objetos con mismas propiedades pero distintos valores

    //  function Mascota(nombre , familia , raza , peso , edad , sonido){
    //      this.nombre = nombre;
    //      this.familia =  familia;
    //      this.raza = raza;
    //      this.peso = peso;
    //      this.edad = edad;
    //      this.sonido = sonido;
    //      this.saludar = function() {
    //          console.log(this.sonido);
    //      }
    //  }
     
    //  const miPerro = new Mascota('Firulais' , 'Perro' , 'Caniche' , 3000 , '7 meses' , 'Guau Guau!');
    //  miPerro.saludar();  //Guau Guau!
    //  console.log(miPerro);


//--------- Objetos de Clase

//      class Mascota{
//          constructor(nombre , familia  , raza ,  peso , edad  ,  sonido){
//              this.nombre =  nombre;
//              this.familia = familia;
//              this.raza = raza;
//              this.peso = peso;
//              this.edad = edad;
//              this.sonido = sonido;
//          }
//          saludar = function(){
//              console.log(this.sonido);
//          }
//      }


// -------------Objetos y Arrays
// En este caso tenemos un array con una coleccion de tareas donde cada tarea
// es un objeto con sus respectivas propiedades.

//      let tasks = [
//          {
//              id:  1,
//              day: 'Lunes',
//              task: 'leer un libro',
//              state: 'Pendiente'
//          },
//          {
//              id: 2,
//              day: 'Miercoles',
//              task: 'Sacar al perro',
//              state: 'Pendiente'
//          },
//          {
//              id: 3,
//              day: 'Viernes',
//              task: 'Jugar Videojuegos',
//              state: 'Pendiente'   
//          },
//      ];


// -------------------------DOM----------------------------------
// ------------------Acceso al DOM
// getElementById('blog')               Trae el nodo del elemento con id #blog.
// querySelecto('#header nav .link')    Accedemos a un nodo como si usaramos un selector CSS.
// getElementByClassName('litle')       Selecciona todos los nodos con la clase .title y los devuelve en un array de nodos.
// getElementsByTagName('p')            Toma todas las etiquetas 'p' y las devuelve en un array de nodos. 

// const title = document.getElementById('ti');
// console.log(title);

// ------------------Modificar el DOM

// Crear elementos
// createElement('div')                 Crea una etiqueta div, podemos alojarla en una variable.
// createTextNode('Hola world')         Crea un nodo de texto con 'Hola world' como contenido.

// Agregar Elementos
// padre.appenChild(hijo)               Agregamos un nodo hijo a un nodo padre
// nodo.innerHTML = '<p>Hola</p>';      Inyectamos HTML dentro de un nodo, reemplazando el contenido actual.
// nodo.innerText = 'Hola';             Inyectamos texto directamente dentro de un nodo o reemplazamos el text existente.
// document.write = 'texto'             Agrega contenido como hijo directo de document, reemplazando todos los nodos anteriores.

// -------------------Eventos
// Events Handlers
// Son los metodos que existen para reaccionar frente a distintos eventos que se produzcan en el navegador

// node.addEventListener('eventType' , callback);       Lo utilizamos sobre el nodo y pasamos el tipo de evento y una funcion de callback 
//                                                      como parametros.
// node.eventType = () => {callback};                   Accedemos al tipo de evento del nodo seleccionado y le asignamos una funcion
//                                                      a ejecutar cuando se realice el evento.
// <button onclick = "action()" ></button>              Desde el HTML agregamos un atributo con el nombre del evento y entre comillas       
// (Es considerada una mala practica)                   pasamos el nombre de la funcion javascript que debe ejecutarse al producirse el evento.

// --------------------Event Types
// Si bien la lista de eventos del navegador es enorme, veremos los mas comunes

// mouse.events:
// click        mouseover/out       mousedown/up        mousemove
// keyboard.events:
// keydown      keyup       keypress
// form.events:
// input        submit      blur        focusout/in     change
// other.events:
// play     pause       load        scroll