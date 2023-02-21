import { adminUser, render } from './modules/render.js';
import { DateTime } from './modules/luxon.js';

const addBtn = document.querySelector('.add');
const todaysDate = document.querySelector('.date');
const cont = document.querySelector('.container');
const now = DateTime.now();

todaysDate.innerHTML = now;

render();

addBtn.addEventListener('click', () => {
  adminUser.addBooks();
  render();
});

const listBooks = document.getElementById('list-books');
const newData = document.querySelector('.new-data');
const link = document.getElementById('list');
const addbooklink = document.getElementById('addbook');
const addbookbutton = document.getElementById('addbooklink');
const heading = document.querySelector('.heading');
const contactlink = document.getElementById('contactlink');
const contact = document.getElementById('contact');
const contactdetail = document.querySelector('.contactdetail');

listBooks.addEventListener('click', () => {
  newData.classList.add('hide');

  link.classList.add('blue');
  heading.classList.remove('hide');
  cont.classList.remove('hide');

  addbooklink.classList.remove('blue');
  contact.classList.remove('blue');
  contactdetail.classList.add('hide');
});

addbookbutton.addEventListener('click', () => {
  heading.classList.add('hide');
  cont.classList.add('hide');
  addbooklink.classList.add('blue');
  newData.classList.remove('hide');
  link.classList.remove('blue');
  contact.classList.remove('blue');
  contactdetail.classList.add('hide');
});

contactlink.addEventListener('click', () => {
  heading.classList.add('hide');
  cont.classList.add('hide');
  contact.classList.add('blue');
  newData.classList.add('hide');
  link.classList.remove('blue');
  cont.classList.add('hide');
  contactdetail.classList.remove('hide');
  addbooklink.classList.remove('blue');
});
