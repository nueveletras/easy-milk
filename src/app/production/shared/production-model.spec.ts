import {ProductionModel} from './production-model';

describe('ProductionModel', () => {
  it('should create an instance', () => {
    expect(new ProductionModel()).toBeTruthy();
  });

  it('aceptar valores en el constructor', () =>{
    let production =new ProductionModel({
      id: 10,
      MilkQuantity: 12,
      ExtractDate: '09/18/2013',
    });
    expect(production.idProduction).toEqual(10);
    expect(production.idQuality).toEqual(12);
    expect(production.registerDate).toEqual('09/18/2013');
  })
});
