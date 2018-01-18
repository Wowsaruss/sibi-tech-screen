(function() {
  'use strict';

  window._ = {};

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  //
  // Note: _.each does not have a return value, but rather simply runs the iterator function over each item in the input collection.
  _.each = function(collection, iterator) {
    if (Array.isArray(collection)) {
      for (var key = 0; key < collection.length; key++){
          iterator(collection[key], key, collection);
        }
    } else {
      for (var objKey in collection){
        iterator(collection[objKey], objKey, collection);
      }
    }
    // for (var i = 0; i < collection.length; i++) {
    //   iterator(collection[i], i, collection);
    // }
  };

  // Return all elements of an array that pass a truth test.
  _.filter = function(collection, test) {
    var result = [];
    _.each(collection, function(item) {
      if(test(item)) {
        result.push(item);
      }
    });
    return result;
  };

  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    var result = [];

    _.each(collection, function (item) {
     result.push(iterator(item));
    });
   
    return result;
    // var mapped = collection.map(collection => x * 2);
    // map() is a useful primitive iteration function that works a lot
    // like each(), but in addition to running the operation on all
    // the members, it also maintains an array of results.
  };
})();
