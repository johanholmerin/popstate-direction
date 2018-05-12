describe('Events', function() {
  it('forward', function() {
    history.pushState(null, '');
    history.back();

    setTimeout(() => {
      history.forward();
    }, 100);

    return promiseListener(window, 'forward', 500);
  });

  it('back', function() {
    history.pushState(null, '');
    history.pushState(null, '');

    setTimeout(() => {
      history.back();
    }, 100);

    return promiseListener(window, 'back', 500);
  });
});

function promiseListener(el, name, delay) {
  return new Promise((res, rej) => {
    const timeout = setTimeout(() => {
      remove();
      rej();
    }, delay);

    function remove() {
      el.removeEventListener(name, listener);
      clearTimeout(timeout);
    }

    function listener(event) {
      remove();
      res();
    }

    el.addEventListener(name, listener);
  });
}
