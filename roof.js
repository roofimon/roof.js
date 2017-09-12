'use strict';

var warning = [
    '********************************************************************************',
    '                                     WARNING                                    ',
    '----------------------Please stop writing javascript----------------------------',
    '********************************************************************************'
  ].join('\n');
  
console.error(warning);


var Roof = {};                    
Roof.doSomething = function () {   
    'use strict';
    return true;              
};
module.exports = Roof;   

