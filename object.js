//var images = document.images;
//imageswithArray = Array.from(images);
//imageswithArray.forEach( img => console.log(imag));
/*con+sole.log(images);

//checks all images and loop

 //div.col-md-4.offset-4.card.mt-4>.card-body>h1{add two number}forms
var links = document.links;
let[...link] = links;

link.forEach(i => console.log(i))
//checks all links and loop...-*/

/*var h1=document.getElementById('id');
h1.style.background = 'yellow';
h1.style.padding = '10px';
h1.style.borderRadius = '10px';
h1.style.border = '2px solid #111';
h1.style.color = 'red';
h1.innerHTML = 'lorem';*/

function addNumbers(){
    var firstnumber = parseFloat(document.getElementById('firstnumber').value);
    var secondnumber = parseFloat(document.getElementById('secondnumber').value);

    document.getElementById('total').value = firstnumber + secondnumber;

    if(isNaN(firstnumber) || firstnumber === ""){
        alert('please add number not string');
    }
    if(isNaN(secondnumber) || secondnumber === ""){
        alert('please add second number not a string');
    }
    }

}