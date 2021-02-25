function choice(arg) {
  let randomIdx = Math.floor(Math.random() * arg.length);
  return arg[randomIdx];
}

export {choice};