describe('State', function() {
  it('recursive state', function() {
    const state = {};
    state.state = state;

    history.pushState(state, '');

    expect(history.state).deep.equal(state);
    expect(history.state).not.equal(state);
  });
});
