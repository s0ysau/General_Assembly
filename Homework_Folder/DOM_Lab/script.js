//Task 1.0
const mainEl = document.querySelector('main');
//Task 1.1
mainEl.style.backgroundColor = 'var(--main-bg)';
//Task 1.2
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
//Task 1.3
mainEl.classList.add('flex-ctr');
//Task 2.0
const topMenuEl = document.getElementById('top-menu');
//Task 2.1
topMenuEl.style.height = '100%';
//Task 2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
//Task 2.3
topMenuEl.classList.add('flex-around');
//Task 3.0
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
//Task 3.1
menuLinks.forEach((menu) => {
    let newAEl = document.createElement('a');
    newAEl.textContent = menu.text;
    newAEl.setAttribute("href", menu.href);
    topMenuEl.append(newAEl);
  });
//Task 4.0
const subMenuEl = document.getElementById('sub-menu');
//Task 4.1
subMenuEl.style.height = '100%';
//Task 4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
//Task 4.3
subMenuEl.classList.add('flex-around');
//Task 4.4
subMenuEl.style.position = 'absolute';
//Task 4.5
subMenuEl.style.top = '0';
//Task 5.1
const topMenuLinks = topMenuEl.querySelectorAll('#top-menu a')
let showingSubMenu = false;

//Task 5.2
topMenuEl.addEventListener('click', (evt) => { 
  evt.preventDefault();
  const evtTarget = evt.target;
if (evtTarget.nodeName !== 'A'){
  return
}

//Task 5.3 
if (evtTarget.classList.contains('active')) {
  evtTarget.classList.remove('active');
  showingSubMenu = false;
  subMenuEl.style.top = 0;
  return;
}

//Task 5.4
topMenuLinks.forEach((link) => {
  link.classList.remove('active')
//Task 5.5 
  link.classList.add('active')  
})

//Task 5.6
const linkObject = menuLinks.find((linkObj) => {
  return linkObj.text === evtTarget.textContent;
}); 
showingSubMenu = 'subLinks' in linkObject;

//Task 5.7 
if (showingSubMenu === true){
  buildSubMenu(linkObject.subLinks)
  subMenuEl.style.top = '100%'
} else {
  subMenuEl.style.top = '0'
}

//Task 5.8
 function buildSubMenu (subLinks){
    subMenuEl.innerHTML = '';
    subLinks.forEach((subLink) => {
      let linkElement = document.createElement('a');
      linkElement.setAttribute("href", subLink.href);
      linkElement.textContent = subLink.text;
      subMenuEl.append(linkElement);
    });
    }   
 });

//Task 6.0
subMenuEl.addEventListener('click', (evt) => {
  evt.preventDefault();
  const evtTarget = evt.target;
  if (evtTarget.nodeName !== 'A'){
  return
}
console.log(evtTarget.textContent)

//Task 6.1
showingSubMenu = false;
subMenuEl.style.top = '0';

//Task 6.2
topMenuLinks.forEach((link) => {
  link.classList.remove('active')
})

//Task 6.3
mainEl.innerHTML = `<h1>${evtTarget.textContent}</h1>`;

//Task 6.4
if (topMenuEl == 'about'){
  mainEl.innerHTML = `<h1>${evtTarget.textContent}</h1>`;
}
});
