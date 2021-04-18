import { toBase64String } from '@angular/compiler/src/output/source_map';
import {compute} from './compute';

describe('compute Paul McDonagh S0019392', () => {
    it('should return 0 if the input is negative', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    });
    it('should return 1 if the input is positive', () => {
        const result = compute(1);
        expect(result).toBe(2);
    });
});
