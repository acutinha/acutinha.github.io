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
/////////////////////////////////////////////////
// Select the button
const btn = document.querySelector(".btn-toggle");
// Check for dark mode preference at the OS level
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Get the user's theme preference from local storage, if it's available
const currentTheme = localStorage.getItem("theme");
// If the user's preference in localStorage is dark...
if (currentTheme == "dark") {
  // ...let's toggle the .dark-theme class on the body
  document.body.classList.toggle("dark-mode");
// Otherwise, if the user's preference in localStorage is light...
} else if (currentTheme == "light") {
  // ...let's toggle the .light-theme class on the body
  document.body.classList.toggle("light-mode");
}

// Listen for a click on the button 
btn.addEventListener("click", function() {
  // If the user's OS setting is dark and matches our .dark-mode class...
  if (prefersDarkScheme.matches) {
    // ...then toggle the light mode class
    document.body.classList.toggle("light-mode");
    // ...but use .dark-mode if the .light-mode class is already on the body,
    var theme = document.body.classList.contains("light-mode") ? "light" : "dark";
  } else {
    // Otherwise, let's do the same thing, but for .dark-mode
    document.body.classList.toggle("dark-mode");
    var theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
  }
  // Finally, let's save the current preference to localStorage to keep using it
  localStorage.setItem("theme", theme);
});