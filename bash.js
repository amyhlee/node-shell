process.stdout.write('prompt > ');

process.stdin.on('data', (pwd) => {
  // const cmd = pwd.toString().trim();
  const cmd = process.cwd();



  process.stdout.write(cmd);
  process.stdout.write('\nprompt > ');
});



