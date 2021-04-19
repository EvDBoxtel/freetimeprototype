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

const homeBtn = document.getElementById('home');
const coursesBtn = document.getElementById('courses');

homeBtn.addEventListener('click', () => {
    alert('home');
    console.log(home);
});
coursesBtn.addEventListener('click', () => {
    alert('courses');
    console.log(courses);
});


const courses = fetch('pages/courses.html')
    .then(function(response) {
        // When the page is loaded convert it to text
        return response.text()
    })
    .then(function(html) {
        // Initialize the DOM parser
        var parser = new DOMParser();

        // Parse the text
        var doc = parser.parseFromString(html, "text/html");

        // You can now even select part of that html as you would in the regular DOM 
        // Example:
        // var docArticle = doc.querySelector('article').innerHTML;

        console.log(doc);
    })
    .catch(function(err) {  
        console.log('Failed to fetch page: ', err);  
    });

    const home = fetch('pages/home.html')
    .then(function(response) {
        // When the page is loaded convert it to text
        return response.text()
    })
    .then(function(html) {
        // Initialize the DOM parser
        var parser = new DOMParser();

        // Parse the text
        var doc = parser.parseFromString(html, "text/html");

        // You can now even select part of that html as you would in the regular DOM 
        // Example:
        // var docArticle = doc.querySelector('article').innerHTML;

        console.log(doc);
    })
    .catch(function(err) {  
        console.log('Failed to fetch page: ', err);  
    });


// let deferredPrompt;
// const addBtn = document.querySelector('.add-button');
// addBtn.style.display = 'none';

// window.addEventListener('beforeinstallprompt', (e) => {
//     // Prevent Chrome 67 and earlier from automatically showing the prompt
//     e.preventDefault();
//     // Stash the event so it can be triggered later.
//     deferredPrompt = e;
//     // Update UI to notify the user they can add to home screen
//     addBtn.style.display = 'block';
  
//     addBtn.addEventListener('click', (e) => {
//       // hide our user interface that shows our A2HS button
//       addBtn.style.display = 'none';
//       // Show the prompt
//       deferredPrompt.prompt();
//       // Wait for the user to respond to the prompt
//       deferredPrompt.userChoice.then((choiceResult) => {
//           if (choiceResult.outcome === 'accepted') {
//             console.log('User accepted the A2HS prompt');
//           } else {
//             console.log('User dismissed the A2HS prompt');
//           }
//           deferredPrompt = null;
//         });
//     });
//   });