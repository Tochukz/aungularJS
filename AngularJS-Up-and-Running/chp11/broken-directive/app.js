angular.module('StockApp', [])
       .controller('MainCtrl', [function(){
           var self = this;
           
           self.stocks = [
               {name: 'First Stock', price: 100, previous: 220},
               {name: 'Second Stock', price: 140, previous: 120},
               {name: 'Third Stock', price: 110, previous: 110},
               {name: 'Fourth Stock', price: 400, previous: 420}
           ];
           
           self.changeAllStocks = function(){
               for(var i=0; i<4; i++){
                   self.stocks[i] = {
                       name: 'Controller Stock', 
                       price: 200,
                       previous: 250
                   };
               }
           };

           self.changeFirstStock = function() {
               self.stocks[0].name = 'Changed First Stock';
           };

       }]);

/*
 * When a directive function changes a given object, then changeFirstStock function will have no effect as it loses reference to the object.
 * Mean while, changeAllStock will still have effect because it trggeres the ng-repeat to create new instances  of the directive.
 */