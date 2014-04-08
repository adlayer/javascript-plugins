# Adlayer Javascript Plugins
> Plug and play powerful client-side integrations

Adlayer Js plugins são componentes que extendem as funcionalidade da [Adlayer js API](http://github.com/adlayer/javascript-api) e consequentemente dos [Adlayer Widgets](http://github.com/adlayer/javascript-api).

Os plugins podem ser utilizados para:
* Acrescentar um comportamento antes ou depois da execução de um widget
* Adicionar opções de targeting customizadas

## Carregando plugins

Os plugins são escritos em javascript e devem preferivelmente estar em arquivos separados do html.

Desta forma os Arquivos de plugins devem ser carregados ANTES de qualquer **Adlayer Widget** ou da **Adlayer Javascript API**.

ex: 
```html
<script src="plugin-url"></script>
<script src="widget-url"></script>
```

Navegue para descobrir Adlayer plugins que pouparão seu trabalho.

## Criando plugins

Todo plugin deve seguir a seguinte estrutura:

```javascript
var adlayer = window.adlayer || {};
adlayer.plugins = adlayer.plugins || {};

adlayer.plugins.nomeDoPlugin = function(adlayer){
	adlayer.on('load', function(){
		
	});
};
```

Todo Adlayer widget antes de iniciar seu autorun registra os plugins e respectivos eventos.

A implementação interna deverá ser algo como:

```javascript
if (adlayer.plugins){
	for(var plugin in adlayer.plugins){
		for(var event in plugin){
			adlayer.on(event, plugin[event]);
		};
	}
};
```