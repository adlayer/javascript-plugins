# Adlayer Javascript Plugins

Adlayer Js plugins são componentes que extendem as funcionalidade dos [Adlayer Widgets](#).

Os plugins pode ser utilizados para:
* Acrescentar um comportamento depois da execução de um widget
* Adicionar opções de targeting customizadas

## Carregando plugins

Os plugins são escritos em javascript e devem preferivelmente ser escritos em arquivos separados do html.

Desta forma os Arquivos de plugins devem ser carregados ANTES de qualquer Adlayer widget.

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

adlayer.plugins.nomeDoPlugin = {
	
	onReady: function(){},
	onLoad: function(){},
	beforeStart: function(){}
}
```

Todo Adlayer widget antes de iniciar seu autorun registra todos os plugins e respectivos eventos.

A implementação deverá ser algo como:

```javascript
if (adlayer.plugins){
	for(var plugin in adlayer.plugins){
		for(var event in plugin){
			adlayer.on(event, plugin[event]);
		};
	}
};
``` 

# Exemplos