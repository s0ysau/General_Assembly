//Task 1.0
const mainEl = document.querySelector('main');
//Task 1.1
mainEl.style.backgroundColor = 'var(--main-bg)';
//Task 1.2
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
//Task 1.3
mainEl.classList.add('flex-ctr');
//Task 2.0
const topMenuEl = document.querySelector('#top-menu');
//Task 2.1
topMenuEl.style.height = '100%';
//Task 2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
//Task 2.3
topMenuEl.classList.add('flex-around');
//Task 3.0
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

//   newAEl.setAttribute("href", "");
//   newAEl.textContent = "Hello World";

const newAEl = document.createElement('a');
    menuLinks.forEach((menu) => {
    // const newAEl = document.createElement('a');
    newAEl.textContent = menu.text;
    newAEl.setAttribute("href", menu.href);
    console.log(newAEl)
  });

// for (let i = 0; i < menuLinks.length; i++){
//     for (let j = 0; j < menuLinks[j].length; j++){
//         newAEl.textContent = menu[i].text;
//         newAEl.setAttribute("href", menu[j].href);
//         document.querySelector('a').innerHTML = newAEl;
//     }
// }

console.log(newAEl);

// menuLinks.forEach((menu) => {
//     const newAEl = document.createElement('a');
//     newAEl.setAttribute("href", menuLinks.href);
//     newAEl.textContent = menuLinks.text;
//     newAEl.innerHTML = menu;
//     document.body.appendChild(newAEl)
// })



topMenuEl.append(newAEl)

