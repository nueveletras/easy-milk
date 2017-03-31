import {Cow} from './cow.model';

describe('Cow', () => {
  it('should create an instance', () => {
    expect(new Cow()).toBeTruthy();
  });
  it('should accept values in the constructor', () => {
    let cow = new Cow({
      id: 40,
      name: 'Blanquita',
      birthDate: new Date('05/20/2016') //  MM/DD/YYYY
    });
    expect(cow.id).toEqual(40);
    expect(cow.name).toEqual('Blanquita');
    expect(cow.birthDate).toEqual(new Date('05/20/2016'));
  })

});
