import {Potrero} from './potrero.model';

describe('Potrero', () => {
  it('should create an instance', () => {
    expect(new Potrero()).toBeTruthy();
  });
  it('aceptar valores en el constructor', () => {
    let potrero = new Potrero({
      id:10,
      descripcion: 'la lana quebrada abajo',
      area:800,
    });
    expect(potrero.id).toEqual(10);
    expect(potrero.descripcion).toEqual('la lana quebrada abajo');
    expect(potrero.area).toEqual(800);
  })
  
});
