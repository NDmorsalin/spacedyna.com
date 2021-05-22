/* ******************************
 *                               *
 *     variable                  *
 *                               *
 *********************************/

const navLink = document.querySelectorAll('.sd_nav-link');


/* ******************************
 *                               *
 *     event                     *
 *                               *
 *********************************/
navLink.forEach(function (element, index, ea) {
    element.addEventListener('click', function (e) {
        //    console.dir(e.target);
        navLink.forEach(function (element, index, ea) {
            removeActiveClass(element)
            // console.dir(element);
        })
        addActiveClass(e.target)
    })
})


/* ******************************
 *                               *
 *     function                  *
 *                               *
 *********************************/

/* add active class from any elements */
function addActiveClass(element) {
    element.classList.add('active');
}

/* remove active class from any elements */
function removeActiveClass(element) {
    element.classList.remove('active');
}