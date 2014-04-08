/**
* @requires http://www.navegg.com/area-de-clientes/documentacao/navegg-em-seu-site/
*/
(function(global){
	// Extending
	var adlayer = global.adlayer || {};
	adlayer.targeting = adlayer.targeting || {};

	// http://www.navegg.com/area-de-clientes/documentacao/segmentos/
	var segments  = ['gender', 'age', 'education', 'marital', 'income', 'interest', 'cluster', 'product', 'carrer', 'brand', 'connection', 'device', 'os', 'browser'];
	
	// Extracting Targeting
	segments.forEach(function(segment){
		adlayer.targeting[segment] = ltgc(segment);
	});
	
	// Exporting
	global.adlayer = adlayer
})(window);

/**
* Adicione a isto
* http://www.navegg.com/area-de-clientes/documentacao/usando-os-dados/exemplos-de-integracao/
*/