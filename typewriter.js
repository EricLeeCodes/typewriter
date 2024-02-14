let typeWriter = function(input) {
  const sentence = input.split("");
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
      if (i === sentence.length - 1) {
        console.log();
      }
    }, i * 50);
  }
};