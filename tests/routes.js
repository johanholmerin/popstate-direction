describe('Routes', function() {
  it('throws on other origin', function() {
    expect(() => history.pushState(null, '', 'http://example.com')).to.throw();
  });
});
