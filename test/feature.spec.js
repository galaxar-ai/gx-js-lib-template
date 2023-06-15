import { feature } from "../src";

describe('feature', function () {
    it('bvt', function () {        
        feature().should.be.eql('fancy feature');
    })
});