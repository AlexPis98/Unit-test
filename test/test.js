const { DAI, token_decimals, tokenToNETH } = require('../index');

var chai = require('chai');
var assert = chai.assert;

describe('tokenToNeth', () => {
  it('should return neth for token', async () => {
      var wrap_to_int = (a) => BigInt(parseInt(String(exp).replace('.','')));
      let count = 1000;
      let exp = 0.001165865684468688;
      exp = wrap_to_int(exp)
      let res = await tokenToNETH(count, DAI, token_decimals);
      console.log(exp)
      res = wrap_to_int(res)
      assert.equal(exp,res)
    });
});
