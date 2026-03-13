(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.items = ShoppingListCheckOffService.getToBuyItems();

  toBuy.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };

  toBuy.remove = function (itemIndex) {
    ShoppingListCheckOffService.removeItemFromToBuy(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;
  bought.items = ShoppingListCheckOffService.getBoughtItems();

  bought.remove = function (itemIndex) {
    ShoppingListCheckOffService.removeItemFromBought(itemIndex);
  };
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [
    { name: "cookies", quantity: 10 },
    { name: "chips", quantity: 5 },
    { name: "soda bottles", quantity: 2 },
    { name: "apples", quantity: 6 },
    { name: "bananas", quantity: 8 }
  ];
  var boughtItems = [];

  service.buyItem = function (itemIndex) {
    var item = toBuyItems[itemIndex];
    toBuyItems.splice(itemIndex, 1);
    boughtItems.push(item);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

  service.removeItemFromToBuy = function (itemIndex) {
    toBuyItems.splice(itemIndex, 1);
  };

  service.removeItemFromBought = function (itemIndex) {
    var item = boughtItems[itemIndex];
    boughtItems.splice(itemIndex, 1);
    toBuyItems.push(item);
  };
}

})();
