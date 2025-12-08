/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import "../styles/main.scss";

const body = document.body;
const navContainer = document.querySelector('[data-nav-container]');
const nav = navContainer?.querySelector('.site-nav');
const navToggle = navContainer?.querySelector('.site-header__toggle');
const navCollapse = document.querySelector('#main-menu');


const setActiveNav = () => {
  const page = body?.dataset.page;
  const hrefTarget = page === 'home' ? 'index' : page;

  nav?.querySelectorAll('.site-nav__link').forEach((link) => {
    const isCurrent = link.getAttribute('href')?.includes(hrefTarget);
    link.classList.toggle('active', Boolean(isCurrent));
    if (isCurrent) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
};

const toggleNav = () => {
  const isOpen = navCollapse?.classList.toggle('is-open');
  navToggle?.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  navContainer?.classList.toggle('is-open', Boolean(isOpen));
};

navToggle?.addEventListener('click', toggleNav);
setActiveNav();