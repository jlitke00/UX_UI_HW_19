console.log("your index.jes file os loading correctly!");


const wordButtons = document.querySelectorAll('.wordButtons');


wordButtons.forEach(button => {
   
    button.addEventListener('mouseover', function() {
       
        if (button.classList.contains('lowercase')) {
            button.classList.remove('lowercase');
            button.classList.add('uppercase');
        } else if (button.classList.contains('uppercase')) {
            button.classList.remove('uppercase');
            button.classList.add('capitalize');
        } else if (button.classList.contains('capitalize')) {
            button.classList.remove('capitalize');
            button.classList.add('lowercase');
        } else {
            button.classList.add('uppercase'); 
        }
    });

    
    button.addEventListener('mouseout', function() {
       
        button.classList.remove('uppercase', 'capitalize');
        button.classList.add('lowercase');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const workButton = document.getElementById('workButton');
    
    workButton.addEventListener('click', function() {
        const myWorkSection = document.getElementById('myWork');
        myWorkSection.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const workButton = document.getElementById('workButtonFooter');
    
    workButton.addEventListener('click', function() {
        const myWorkSection = document.getElementById('myWork');
        myWorkSection.scrollIntoView({ behavior: 'smooth' });
    });
});