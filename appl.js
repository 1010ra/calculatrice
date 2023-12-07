const body = document.body
const calculatrice = document.querySelector('.calculatrice');
console.log(calculatrice);
const span1 = document.getElementById('one');
console.log(span1);
const span2 = document.getElementById('two');
console.log(span2);
const span3 = document.getElementById('tree');
console.log(span3);

span2.addEventListener(
   "click",
   function () {
      span1.setAttribute('style', 'background-color:hsl(0, 5%, 81%)');
      span2.setAttribute('style', 'background-color:red');
      span3.setAttribute('style', 'background-color:hsl(0, 5%, 81%)');
      body.setAttribute('style', 'background-color: hsl(0, 0%, 90%)');
      calculatrice.classList.remove('theme1', 'theme3');
      calculatrice.classList.add('theme2')

   });
span3.addEventListener(
   "click",
   function () {
      span1.setAttribute('style', 'background-color:hsl(268, 47%, 21%)');
      span2.setAttribute('style', 'background-color:hsl(268, 47%, 21%)');
      span3.setAttribute('style', 'background-color:hsl(176, 100%, 44%)');
      body.setAttribute('style', 'background-color: hsl(281, 89%, 26%)');
      calculatrice.classList.remove('theme2', 'theme1');
      calculatrice.classList.add('theme3')

   });


//  
span1.addEventListener(
   "click",
   function () {
      span1.setAttribute('style', 'background-color:red');
      span2.setAttribute('style', 'background-color:hsl(223, 31%, 20%)');
      span3.setAttribute('style', 'background-color:hsl(223, 31%, 20%)');
      body.setAttribute('style', 'background-color: hsl(222, 26%, 31%)');
      calculatrice.classList.remove('theme2', 'theme3');
      calculatrice.classList.add('theme1')

   });


// ====================================================================
let resultat = '';
let nombre1 = '';
let nombre2 = '';
let signe = '';
const ecran = document.getElementById('ecran');
function appendNumber(n) {
   if (!signe) {
      nombre1 += n;
      ecran.value = nombre1;
      console.log('nombre1 =>', nombre1);

   } else {
      nombre2 += n;
      ecran.value = nombre2;
      console.log('nombre2 =>', nombre2);
      //  ecran.value = `${nombre1}${signe}${nombre2}`;

   }
}
function appendOpperator(valeur) {

   ecran.value = ''
   signe = valeur;
   //  ecran.value = `${nombre1}${signe}${nombre2}`;
}

function egalite() {
   switch (signe) {
      case '+':
         resultat = Number(nombre1) + Number(nombre2);
         console.log(resultat);
         ecran.value = resultat;
         nombre1 = '';
         nombre2 = '';
         signe = '';
         break;
      case '-':
         resultat = Number(nombre1) - Number(nombre2);
         console.log(resultat);
         ecran.value = resultat;
         nombre1 = '';
         nombre2 = '';
         signe = '';
         break;
      case '*':
         resultat = Number(nombre1) * Number(nombre2);
         console.log(resultat);
         ecran.value = resultat;
         nombre1 = '';
         nombre2 = '';
         signe = '';
         break;
      case '/':
         resultat = Number(nombre1) / Number(nombre2);
         console.log(resultat);
         ecran.value = resultat;
         nombre1 = '';
         nombre2 = '';
         signe = '';
         break;

      default:
         break;

   }
}

function effacer() {
   nombre1 = '';
   nombre2 = '';
   ecran.value = "";
}

function btmClean() {
   if (nombre1 != "" && !signe) {
      nombre1 = ecran.value = ecran.value.slice(0, -1);
   }
   if (nombre2 != "") {
      nombre2 = ecran.value = ecran.value.slice(0, -1);
   }

}

 function point() {
   if (!ecran.value.includes('.')){
      if (nombre1 == '' && (!signe)) {
         nombre1 += '0.';
      ecran.value = nombre1;
      }else if(nombre1 != '' && (!signe)){
         nombre1 += '.';
         ecran.value = nombre1;
   
      }
      if (nombre2 != '' && (signe)) {
         nombre2 += '.';
         ecran.value = nombre2;
      }
   }else if(ecran.value.includes('.')&& nombre1 != '' && nombre2 =='' && (signe)){
      nombre2 += '0.'
      ecran.value = nombre2
   } 
   
};





