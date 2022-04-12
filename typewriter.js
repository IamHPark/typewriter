const sentence = "hello there from lighthouse labs";

// looping through characters and print out
let time = 500
for (const char of sentence) {
  setTimeout(() => {process.stdout.write(char)}, time ); 
  time += 500;
};
setTimeout(()=> console.log('\n'), time);