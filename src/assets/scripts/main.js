/**
 * Import dependencies from node_modules
 * see commented examples below
 */

const setActiveNav = () => {
  const page = body.dataset.page;
  const target = nav?.querySelector(`.nav__link[href*=${page === "home" ? "index" : page}]`);
  nav?.querySelectorAll('.nav__item').forEach((item) => item.classList.remove('is-active'));
  target?.closest('.nav__item')?.classList.add('is-active');
};

const toggleNav = () => {
  const isOpen = nav?.classList.toggle('is-open');
  navToggle?.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  navContainer?.classList.toggle('is-open', Boolean(isOpen));
};

navToggle?.addEventListener('click', toggleNav);
setActiveNav();