angular.module('ultimateDataTableServices').
factory('udtConvertValueServices', [function() {
    		var constructor = function($scope){
				var udtConvertValueServices = {
				    //Convert the value in inputUnit to outputUnit if the units are different
					convertValue : function(value, inputUnit, outputUnit){
							if(inputUnit !== outputUnit && !isNaN(value)){
								var convert = this.getConversion(inputUnit,outputUnit);
								if(convert != undefined && !angular.isFunction(convert)){
									value = value * convert;
								}else if(convert == undefined){
									alert("Error: Unknown Conversion "+inputUnit+" to "+outputUnit);
									return undefined;
								}
							}
							return value;
					},
					//Get the multiplier to convert the value
					getConversion : function(inputUnit, outputUnit){
						if((inputUnit === '�g' && outputUnit === 'ng') || (inputUnit === 'ml' && outputUnit === '�l')){
							return (1/1000);
						}else if((inputUnit === 'ng' && outputUnit === '�g') || (inputUnit === '�l' && outputUnit === 'ml')){
							return 1000;
						}
						return undefined;
					}
				};
				return udtConvertValueServices;
			};
    		return constructor;
}]);