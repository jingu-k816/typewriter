const sentence = "hello there from lighthouse labs"; //has length of 32 characters
let time = 0;

for (const char of sentence){
  setTimeout(() => {
    process.stdout.write(char);
  }, (time++) * 50); 
}
//Value of time at this stage after the for loop is going to be 32
setTimeout(()=> console.log("\n"), time * 50); //time * 50 will be executing this line of code at the same time as character "s" in the example.