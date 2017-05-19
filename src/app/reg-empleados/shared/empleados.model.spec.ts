import {Empleados} from './empleados.model';

describe('Empleados', () => {
  it('should create an instance', () => {
    expect(new Empleados()).toBeTruthy();
  });
  it('should accept values in the constructor', () => {
    let empleados = new Empleados({
      name: 'Jhon',
      id: 30,
      tel: 6145882,
      adress: 'cra 82A # 42-57',
      rol: 'ordeñador',
      ContractingDate: new Date('02/15/2015')
    });
    expect(empleados.name).toEqual('Jhon');
    expect(empleados.id).toEqual(30);
    expect(empleados.tel).toEqual(6145882);
    expect(empleados.address).toEqual('cra 82A # 42-57');
    expect(empleados.rol).toEqual('ordeñador');
    expect(empleados.contractingDate).toEqual(new Date('02/15/2015'));

  })
});
