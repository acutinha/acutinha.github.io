function darkMode() {
    const darkModeSwitch = document.getElementById('checkbox');
    //temp fix (clear tech debt later)
    var card0 = document.getElementById('card0');
    var card1 = document.getElementById('card1');
    var card2 = document.getElementById('card2');
    var card3 = document.getElementById('card3');
    var card4 = document.getElementById('card4');
    var card5 = document.getElementById('card5');
    var card6 = document.getElementById('card6');
    var card7 = document.getElementById('card7');
    var card8 = document.getElementById('card8');
    var card9 = document.getElementById('card9');
    var card10 = document.getElementById('card10');
    var card11 = document.getElementById('card11');
    var card12 = document.getElementById('card12');
    var card13 = document.getElementById('card13');
    var card14 = document.getElementById('card14');

    darkModeSwitch.addEventListener('change',() => {   
        document.body.classList.toggle('dark');
        var theme = document.body.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem("theme", theme);
        
        // browser handles error when they are not defined but needs better error handling in future. Prefferably a more structured approach
        card0.classList.toggle('card-dark');
        card1.classList.toggle('card-dark');
        card2.classList.toggle('card-dark');
        card3.classList.toggle('card-dark');
        card4.classList.toggle('card-dark');
        card5.classList.toggle('card-dark');
        card6.classList.toggle('card-dark');
        card7.classList.toggle('card-dark');
        card8.classList.toggle('card-dark');
        card9.classList.toggle('card-dark');
        card10.classList.toggle('card-dark');
        card11.classList.toggle('card-dark');
        card12.classList.toggle('card-dark');
        card13.classList.toggle('card-dark');
        card14.classList.toggle('card-dark');
        
    });
}

function themeStatus() {
    // if(currentTheme === null){
    //     localStorage.setItem('theme', 'light');
    // }
    const darkModeSwitch = document.getElementById('checkbox');
    var currentTheme = localStorage.getItem("theme");
    if(currentTheme === 'dark'){
        darkModeSwitch.click();
    }
}