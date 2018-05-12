describe('Location', function() {
  it('sets hash', function() {
    const hash = 'foo';
    location.hash = hash;

    expect(location.hash).to.equal(`#${hash}`);
  });

  it('resets state', function() {
    location.hash = '';

    expect(history.state).to.equal(undefined);
  });
});
