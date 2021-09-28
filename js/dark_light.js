// Gestion des événements
document.documentElement.setAttribute('data-theme', 'light');
document.getElementById("dark_light").addEventListener("click", darkLight);

function darkLight() {
    if(document.documentElement.getAttribute('data-theme') == 'light')
    {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById("dark_light").innerHTML="Mode clair";
    }
    else
    {
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById("dark_light").innerHTML="Mode sombre";
    }
}
