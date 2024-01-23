export function* generateSequence() {
  let count = 0;
  while(true) {
    yield count ++;
  }
}

function* genNumbers(size) {
  let count = 0;
  while (count < size) {
    yield count++;
  }
}

export function* genNumbersWrapper(size) {
  yield* genNumbers(size);
}

export function* generateSomething(size) {
  let step = 1;
  let count = 0;
  while (count < size) {
    const newStep = yield count += step;

    step = newStep ? newStep : step;
  }
}

export function* genBroken() {
  yield '123';
}

export function* genDigProperty(prop, obj) {
  if (obj[prop]) {
    yield obj[prop];
  } else {
    const keys = Object.keys(obj);

    for (let index = 0; index < keys.length; index++) {
      const key = keys[index];
      yield* genDigProperty(prop, obj[key]);
    }
  }
}
