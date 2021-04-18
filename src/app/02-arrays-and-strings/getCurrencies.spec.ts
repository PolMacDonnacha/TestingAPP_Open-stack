import { getCurrencies } from './getCurrencies';

describe('getCurrencies Paul McDonagh S0019392', () => {
    it('It should contain EUR, USD and GBP', () => {
        expect(getCurrencies()).toContain('USD' && 'EUR' && 'GBP');
    });
});

describe('getIncorrectCurrencies Paul McDonagh S0019392', () => {
    it(' Paul McDonagh S0019392It should NOT contain EUR, USD and GBP, this test should fail', () => {
        expect(getCurrencies()).toContain('USB' && 'EIR' && 'DMT');
    });
});
