const { DAI, token_decimals, tokenToNETH } = require('../index');
var BigNumber = require('bignumber.js');

var chai = require('chai');
chai.use(require('chai-bignumber')(BigNumber));

describe('tokenToNeth', () => {
  it('should return neth for token', async () => {
      let count = 1000;
      let exp = 0.001165865684468688;
      let res = await tokenToNETH(count, DAI, token_decimals);
      res.should.be.bignumber.approximately(exp, 0.001);
      // res.should.be.equal(exp);
    });
});
