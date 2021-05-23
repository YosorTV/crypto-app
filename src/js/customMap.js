Array.prototype.customMap = (cb) => {
  const result = [];
  for (let index = 0; index < this.length; index++){
    result.push(cb(this[index], index, this));
  }
  return result;
}