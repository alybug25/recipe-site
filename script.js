// function that checks if class name exists
const getElement = (selector) => {
    const element = document.querySelector(selector);

    if (element) {
        return element
    }
    else {
        throw Error(`check class names, there is no ${selector} class`)
    }
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', ()=>{
    links.classList.toggle('show-links')
    // no dot because we know we're talking about a class
})