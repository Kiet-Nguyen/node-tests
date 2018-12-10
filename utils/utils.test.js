const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  const res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');
  // if (res !== 44) {
  //   throw new Error(`Expected 44, but got ${res}.`);
  // }
});

it('should async add two numbers', done => {
  utils.asyncAdd(4, 3, sum => {
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});

it('should square a number', () => {
  const res = utils.square(4);

  expect(res).toBe(16).toBeA('number');
});

it('should async square a number', done => {
  utils.asyncSquare(4, result => {
    expect(result).toBe(16).toBeA('number');
    done();
  });
});

it('should verify first and last name are set', () => {
  const user = {
    location: 'US',
    age: 34
  };
  const res = utils.setName(user, 'Kiet Nguyen');

  expect(res).toInclude({
    firstName: 'Kiet',
    lastName: 'Nguyen'
  });
})

// it('should expect some value', () => {
//   // expect(12).toNotBe(12);
//   expect({name: 'Kiet'}).toEqual({name: 'Kiet'});
// })
