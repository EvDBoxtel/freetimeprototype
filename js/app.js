const tags = document.querySelectorAll('.tag'); /** elementen met class 'tag' */
const search_icon = document.getElementById('search-icon'); /** element met id 'search-icon' */
const search_bar = document.getElementById('search-bar'); /** element met id 'search-bar' */

setInterval("checkFocus()", 1); /** voert elke duizendste seconde de 'checkForcus' functie uit */

tags.forEach((tag) => { /** looped door alle elementen van class 'tag' heen */
    tag.addEventListener('click', () => { /** voeg voor elk element een click functie toe */
        tag.classList.toggle('checked'); /** toggle de class 'cheked' aan of uit bij elke klik */
    })
})

function checkFocus() { /** start checkFocus functie */
    if(search_bar != null) { /** checkt of het element 'search-bar' bestaat op de bezochte pagina */
        if (search_bar == document.activeElement) { /** past stijl van de search_bar aan als deze gefocust is */
            search_icon.style.transition = 0.1;
            search_icon.style.opacity = 0;
            search_icon.style.display= 'none';
        } else { /** draait de bovenstaande aanpassingen terug als de searchbar niet emer gefocust is */
            search_icon.style.display = 'inline';
            search_icon.style.transition = 0.1;
            search_icon.style.opacity = 1;
        }
    }
}