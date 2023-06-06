// this code will be executed after page load
(function() {
  const headerNotice = () => {
    if (window.location.host !== '{host_name}') {
      return;
    }
    const targets = document.querySelectorAll('{.target_class}');
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
