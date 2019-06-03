document.addEventListener('DOMContentLoaded', () => {
  // Control the navbar menu
  const navbarBurgers = document.querySelectorAll('.navbar-burger');

  navbarBurgers.forEach((burger) => {
    burger.addEventListener('click', () => {
      const navbarMenu = document.getElementById(burger.dataset.target);

      navbarMenu.classList.toggle('is-active');
      burger.classList.toggle('is-active');
    });
  });

  // Control the anchor tabs
  const anchorTabs = document.querySelectorAll('.anchor-tab');

  anchorTabs.forEach((element) => {
    element.addEventListener('click', () => {
      const contentTabId = element.id.replace(/tab/g, 'content');

      document.querySelectorAll('.anchor-tab').forEach((anchor) => {
        anchor.id === element.id ? anchor.classList.add('is-active') : anchor.classList.remove('is-active');
      });
      document.querySelectorAll('.content-tab').forEach((content) => {
        content.id === contentTabId ? content.classList.remove('is-hidden') : content.classList.add('is-hidden');
      });
    });
  });
});
