import { greet } from './greet';

describe('greet Paul McDonagh S0019392', () => {
    it('It should include the name in the message', () => {
        expect(greet('Frank')).toContain('Frank');
    });
});
