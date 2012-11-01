Function.prototype.memoize = function() {
  var fn = this,
      cache = {};
  return function(arg) {
    if(!cache[arg]) {
      cache[arg] = fn.call(null, arg);
    }
    return cache[arg];
  };
};