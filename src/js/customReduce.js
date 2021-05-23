Array.prototype.customReduce = function (cb, acc) {
  if (this.length < 1) throw new Error("Empty Array");
  if (!acc) {
    if (typeof this[0] === "string") acc = "";
  } else if (typeof this[0] === "number") acc = 0;
  for (let i = 0; i < this.length; i++) acc = cb(acc, this[i]);
  return acc;
};
