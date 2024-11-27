import { GameStatus } from "../game-status.enum";

describe('game status', () => {

    test('exits playing', () => {
        expect(GameStatus?.Playing)?.toBe('playing')
        
    });
    
    
});
