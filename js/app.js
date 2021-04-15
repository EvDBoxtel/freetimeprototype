const tags = document.querySelectorAll('.tag');
const search_icon = document.getElementById('search-icon');
const search_bar = document.getElementById('search-bar');

setInterval("checkFocus()", 1);

tags.forEach((tag) => {
    tag.addEventListener('click', () => {
        tag.classList.toggle('checked');
    })
})

function checkFocus() {
    if(search_bar != null) {
        if (search_bar == document.activeElement) {
            search_icon.style.transition = 0.1;
            search_icon.style.opacity = 0;
            search_icon.style.display= 'none';
        } else {
            search_icon.style.display = 'inline';
            search_icon.style.transition = 0.1;
            search_icon.style.opacity = 1;
        }
    }
}