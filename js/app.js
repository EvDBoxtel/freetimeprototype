const tags = document.querySelectorAll('.tag'); /** elementen met class 'tag' */
const search_icon = document.getElementById('search-icon'); /** element met id 'search-icon' */
const search_bar = document.getElementById('search-bar'); /** element met id 'search-bar' */
const generalHeader = document.getElementById('generalHeader');
const profileHeader = document.getElementById('profileHeader');
let body = document.querySelector('body');
let main = document.querySelector('main');
let profile = document.getElementById('profile');
if (document.title == 'Prototype FreeTime') {
    profileHeader.style.display = 'none';
    console.log(localStorage.getItem('isSurveyDone'));
    if (localStorage.getItem('isSurveyDone') == 'true') {
        console.log('isTrue');
        fetch('pages/courses.html').then(function(response) {
            return response.text()
        }).then(function(html) {
            main.innerHTML = html;
        });
    } else {
        console.log('isFalse');
        fetch('survey/question1.html').then(function(response) {
            return response.text()
        }).then(function(html) {
            document.write(html);
        })
    }
    

    let deferredPrompt;
    const addBtn = document.querySelector('.add-button');
    // addBtn.style.display = 'none';
    
    window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault();
        // Stash the event so it can be triggered later.
        deferredPrompt = e;
        // Update UI to notify the user they can add to home screen
        addBtn.style.display = 'block';
        addBtn.addEventListener('click', (e) => {
            // hide our user interface that shows our A2HS button
            addBtn.style.display = 'none';
            // Show the prompt
            deferredPrompt.prompt();
            // Wait for the user to respond to the prompt
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the A2HS prompt');
                } else {
                    console.log('User dismissed the A2HS prompt');
                }
                deferredPrompt = null;
            });
        });
    });

    if (window.matchMedia('(display-mode: standalone)').matches) {  
        addBtn.style.display = 'none';
    }  
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
        .register('serviceworker.js')
        .then(reg => console.log('Serviceworker is: Registered'))
        .catch(err => console.log(`Serviceworker is: Error: ${err}`));
    })
}

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

const menuBtns = document.querySelectorAll('.menuBtn'); /** vraag elementen op met class 'menuBtn' */

menuBtns.forEach((menuBtn) => { /** looped door alle elementen van class 'menuBtn' heen */
    menuBtn.addEventListener('click', () => { /** voeg voor elke element een click functie toe */
        menuBtns.forEach((menuBtn) => {
            menuBtn.firstChild.classList.remove('actief');
        });
        menuBtn.firstChild.setAttribute('class', 'actief');

        let page_id = menuBtn.getAttribute("data-page-id"); /** vraag het data attribuut op bij de aangeklikte 'menuBtn' */
        loadPage(page_id); /** roep de loadpage functie aan met de data van het data attribuut van de 'menuBtn' */
    })
})

const loadPage = (pageId) => { 
    fetch(pageId) /** start een asynchrone functie om data van de aangevraagde pagina ('pageId') op te halen  */
    .then(function(response) {
        return response.text() /** geeft de data van de opgevraagde pagina weer als tekst */
    })
    .then(function(html) {
        if(pageId == 'pages/profile.html') { //checkt of het de profile pagina is
            body.setAttribute('id', 'fullpage'); //Geeft de body een id
            generalHeader.style.display = 'none';
            profileHeader.style.display = 'block';
            main.innerHTML = html;
        } else {
            body.setAttribute('id', ''); // haalt de id van de body weg
            generalHeader.style.display = 'block';
            profileHeader.style.display = 'none';
            main.innerHTML = html; /** zet de opgevraagde data in een html element */
        }
    })
    .catch(function(err) {  
        console.log('Failed to fetch page: ', err);  /** geeft een error melding als het opvragen van de data niet goed verloopt */
    });
};

//backpackingcourse scroll progress
if (document.title == 'Backpacking course') {
    main.onscroll = function() {readProgression()};

    function readProgression() {
    var winScroll = main.scrollTop;
    var height = main.scrollHeight - main.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
    }    
}

function setSurveyDone() {
    localStorage.setItem('isSurveyDone', true);
}

