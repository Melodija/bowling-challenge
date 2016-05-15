describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('should begin with the 1st round', function() {
    expect(game.getRound()).toEqual(1);
  });

  it('should have a maximum of 10 rounds', function() {
    for(var round = 1; round <= game.MAX_ROUND; round++){
      game.rollBall(4)
      game.rollBall(5)
    };
    expect(game.getRound()).toEqual(10);
  });

  describe('each round', function() {
    it('should begin with 10 pins', function() {
      expect(game.numberOfPins()).toEqual(10);
    });

    it("the pins should reduce in amount after I've rolled a ball", function() {
      game.rollBall(5);
      expect(game.numberOfPins()).toEqual(5);
    });

    it('should begin with 0 rolls', function() {
      expect(game.numberOfRolls).toEqual(1);
    });

    it('should increase in roll number after each roll', function() {
      game.rollBall(1);
      expect(game.numberOfRolls).toEqual(2);
    });

    it('should begin afresh after 2 rolls', function() {
      game.rollBall(3);
      game.rollBall(5);
      expect(game.getRound()).toEqual(2);
    });

    it('should calculate the score for that round', function() {
      game.rollBall(3);
      game.rollBall(6);
      expect(game.roundScore()).toEqual(9);
    });




  });
});
