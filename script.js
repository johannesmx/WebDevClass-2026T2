// function to trigger when document is loaded
function onLoad() {
    const btn = document.querySelector('#nav-button');
    const nav = document.querySelector('.navigation');
    // add a trigger to the button
    btn.addEventListener('click', () => {
        // if navigation has class 'open'
        if( nav.classList.contains('open') ) {
            // close by removing the open class
            nav.classList.remove('open')
        }
        else {
            nav.classList.add('open')
        }
    })
}
// wait for document to fully load
window.addEventListener('load',onLoad)