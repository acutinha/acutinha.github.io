//Improvement Required
//Next step: Store dark switch using local torage

var DarkModeSwitch = document.getElementById('checkbox');
// Function does not retain the selection when refreshed 
// DarkModeSwitch.addEventListener('change',() => {    
//     document.body.classList.toggle('dark');
//     localStorage.setItem("darkSwitch","dark")
// });

window.addEventListener("load",(function(){
    if(DarkModeSwitch){
        isDarkTheme();
        if(DarkModeSwitch.checked){
            document.body.classList.toggle('dark');
        }
        DarkModeSwitch.addEventListener("change",(function(){
            document.body.classList.toggle('dark');
        }))
    }
}));

function isDarkTheme(){
    var darkThemeSelected = localStorage.getItem("DarkModeSwitch") !== null && localStorage.getItem("DarkModeSwich")==="dark";
    DarkModeSwitch.checked = darkThemeSelected;
    //darkThemeSelected?document.body.setAttribute("data-theme","dark"):document.body.removeAttribute("data-theme")
    
}

function resetTheme(){
    if(DarkModeSwitch.checked){
        document.body.setAttribute("data-theme","dark");
        localStorage.setItem("darkSwitch","dark")
    }else{
        document.body.removeAttribute("data-theme");
        localStorage.removeItem("darkSwitch")
    }
}