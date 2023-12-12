function Sequence(start, end, steps) {
    this.start = start;
    this.end = end;
    this.steps = steps; 
    this.generateSeq = function () {
      let result = [];
      let currentStep = start;
      for (let i = start; i <= end; i += steps) {
        result.push(currentStep);
        currentStep += steps;
      }
      return result;
    };
  }
  
  const seq = new Sequence(1, 10, 3);
  console.log(seq.generateSeq());
  