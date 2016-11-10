

describe('index', function() {
  it('should return a cloned heroes array with newly added intials key', function() {
		let expected = [{ firstName: 'Tony', lastName: 'Stark', heroName: 'Iron Man', initials:'TS' },
  									{ firstName: 'Steve', lastName: 'Rogers', heroName: 'Captain America', initials: 'SR' },
  									{ firstName: 'Barry', lastName: 'Allen', heroName: 'The Flash', initials: 'BA' }
									 ];
    expect(addInitialsToHeroes(heroes)).toMatch(expected);
  });
});
