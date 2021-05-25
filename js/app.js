'use strict';

let sportinfo = prompt ('are you into sports?')
sportinfo = sportinfo.toLowerCase();
console.log(sportinfo);


if(sportinfo ==='yes' || sportinfo ==='y')
{
    alert ('good for you');
}
else if(sportinfo ==='no' || sportinfo === 'n') {
    alert ('you have to !')
}
else {
    alert('you have to pick between yes or no');
}


alert ('answer the following questions with yes or no');
 let q1 = prompt ('have Ajax team ever won the champion leauge?');

 switch (q1.toLowerCase())
 {
     case 'yes':
     //console.log(true)
     alert ('Good');
     break;

     case 'no':
      //console.log(false)
     alert ('oops');
     break;


 }

 let q2 = prompt ('Germany team won the world cup 3 times');

 switch (q2.toLowerCase())
 {
     case 'yes':
      //console.log(true)
     alert ('oops');
     break;

     case 'no':
     //console.log(false)
     alert ('good');
     break;
    
     

 }
 let q3 = prompt ('Kaka won the golden ball two times');

 switch (q3.toLowerCase())
 {
     case 'yes':
      //console.log(true)
     alert ('oops');
     break;

     case 'no':
     //console.log(false)
     alert ('good');
     break;
     

 }
 let q4 = prompt ('Roger Federer have 20 Grand slam')
 switch (q4.toLowerCase())
 {
     case 'yes':
      //console.log(true)
     alert ('Good');

     case 'no':
     //console.log(false)
     alert ('oops');
     break;
     

 }
 let q5 = prompt ('PSG won the Champions leauge last year');

 switch (q5.toLowerCase())
 {
     case 'yes':
      //console.log(true)
     alert('oops')
     break;

     case 'no':
     //console.log(false)
     alert('good')
    break;
     

 }

 alert ('You did great !');

