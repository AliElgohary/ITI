function Sequence(start, end, steps) {
  this.start = start;
  this.end = end;
  this.steps = steps;
  var result = [];

  this.generateSeq = function () {
    this.result = [];
    for (let i = this.start; i <= this.end; i += this.steps) {
      if (!result.includes(i)) {
        result.push(i);
      }
    }
    return result;
  };

  this.addValue = function (value) {
    if (!result.includes(value)) {
      result.push(value);
    }
    return result;
  };

  this.removeValue = function (value) {
    const index = result.indexOf(value);
    if (index > -1) {
      result.splice(index, 1);
    }
    return result;
  };
}

const seq = new Sequence(1, 10, 3);
console.log(seq.generateSeq());

seq.addValue(3);
seq.addValue(5);
console.log(seq.generateSeq());

seq.removeValue(3);
console.log(seq.generateSeq());
