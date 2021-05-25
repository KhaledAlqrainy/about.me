'use strict';

let points =0;
let q5 = prompt('PSG won the Champions leauge last year');

switch (q5.toLowerCase()) {
    case 'yes':
    case 'y':
        //console.log(true)
        alert('oops')
        break;

    case 'no':
    case 'n':
        //console.log(false)
        alert('good')
        points++;
        break;


}

let picknum = prompt('how many times did AC Milan won the champions leauge?');

    for ( var x=0 ; x >4 ; x++)
    {
        if (picknum === 7) {
            alert ('Great !');
            points++;
            
            

        }

        else if (picknum >7 ){
            picknum = prompt(' too high try again');
        }

        else if (picknum<7) {
            picknum = prompt(' too low, try again');
        }
        
    }










