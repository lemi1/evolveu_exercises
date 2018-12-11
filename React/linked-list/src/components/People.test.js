import lm from './People';

test('testing birthday', () => {
  let myPeople = new lm.People('Ariel', 21, 500);
  myPeople.birthday();
  expect(myPeople.show()).toBe('Ariel 22 500');

  myPeople = new lm.People('Simba', 38, 1000);
  myPeople.birthday();
  expect(myPeople.show()).toBe('Simba 39 1000');

  let p = new lm.People('Mister P', 29, 1200);
  let bff = p;

  p.birthday();
  expect(p.show()).toBe('Mister P 30 1200');
  expect(bff.show()).toBe('Mister P 30 1200')
  // bff also changed age since p and bff both point to the
  //same instance of the object




});
