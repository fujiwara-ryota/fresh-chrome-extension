// this code will be executed after page load
(function() {
  const headerNotice = () => {
    if (window.location.host !== '{target-host.com}') {
      return;
    }
    const targets = document.querySelectorAll('.l-header__name');
    [...targets].forEach(target => {
      const text = target.textContent;
      if (text.indexOf('代理アカウント') !== -1) {
        target.classList.add('chrome-ex-header-blink');
      } else {
        target.classList.add('chrome-ex-header-notice');
      }
    });
  };
  headerNotice();
})();
