var oddButton = document.getElementById('odd');
var evenButton = document.getElementById('even');

// li's even and odd

var oddLi = document.querySelectorAll("li:nth-child(odd)");
var evenLi = document.querySelectorAll("li:nth-child(even)");

// access dom with events
oddButton.addEventListener('mouseenter',()=>{
    console.log('mouse entered ....odd');
    oddLi.forEach(odd =>{
        odd.classList.add('odd');
    });
    evenLi.forEach(even =>{
        even.classList.remove('even');
    });
});

evenButton.addEventListener('mouseenter',()=>{
    console.log('mouse entered ....even');
    evenLi.forEach(even =>{
        even.classList.add('even');
    });
    oddLi.forEach(odd =>{
        odd.classList.remove('odd');
    });
});