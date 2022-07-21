const expect = require('chai').expect;
const tokenToNETH = require('../index');


it('calc', () => {

    let res_0 = await tokenToNETH(count, DAI, token_decimals);
   expect(res_0).closeTo(0.001165865684468688);


});
