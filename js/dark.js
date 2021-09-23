function darkMode() {
    const darkModeSwitch = document.getElementById('checkbox');
    //temp fix (clear tech debt later)
    var card0 = document.getElementById('card0');
    var card1 = document.getElementById('card1');
    var card2 = document.getElementById('card2');
    var card3 = document.getElementById('card3');

    darkModeSwitch.addEventListener('change',() => {   
        document.body.classList.toggle('dark');
        document.body.card.classList.toggle('dark');
        card0.classList.toggle('card-dark');
        card1.classList.toggle('card-dark');
        card2.classList.toggle('card-dark');
        card3.classList.toggle('card-dark');
    });
}