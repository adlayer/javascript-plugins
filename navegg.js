
//http://www.navegg.com/area-de-clientes/documentacao/segmentos/
/**
* @requires http://www.navegg.com/area-de-clientes/documentacao/navegg-em-seu-site/
*/
var adlayer = adlayer || {};
adlayer.targeting = adlayer.targeting || {};

var segments  = ['gender', 'age', 'education', 'marital', 'income', 'interest', 'cluster', 'product', 'carrer', 'brand', 'connection', 'device', 'os', 'browser'];
segments.forEach(function(segment){
	adlayer.targeting[segment] = ltgc(segment);
});

/**
* Adicione a isto
* http://www.navegg.com/area-de-clientes/documentacao/usando-os-dados/exemplos-de-integracao/
*/