function fibonacci(num) {
  if (num <= 1) {
    return num;
  } 
  else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

for (var i = 1; i <= 20; i++) {
    document.write(fibonacci(i));
    document.write("\n\n\n\n\n")
}
