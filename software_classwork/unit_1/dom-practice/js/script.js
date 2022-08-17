const titleEl = document.querySelector('body > h1.main-title')
console.log(titleEl)

const pEl = document.querySelector(".cool")
console.log(pEl.style)

titleEl.style.textAlign = 'center';

pEl.style.color = 'blue';
pEl.style.fontStyle = "italic";


document.querySelector('a').setAttribute("href", "https://www.google.com")

const commentEls = document.querySelectorAll('.comment')
console.log(commentEls);

document.querySelector('body > ul > :first-child').innerHTML = 'first comment AND first child';

document.querySelector('body > ul > :last-child').innerHTML = 'last comment AND last child';

document.querySelector('body > ol > :only-child').innerHTML = 'Yes I am an only child'