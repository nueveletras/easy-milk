import {RegNovedadesSalud} from './reg-novedades-salud.model';

describe('RegNovedadesSalud', () => {
  it('should create an instance', () => {
    expect(new RegNovedadesSalud()).toBeTruthy();
  });
  it('should accept values in the constructor', () => {
    let regNovedadesSalud = new RegNovedadesSalud({
      diseaseType: 'diarrea viral bovina',
      sickCowsNumber: 10,
      paddockID: 105,
       diseaseDiscoveryDate: new Date('03/29/2016') //  MM/DD/YYYY
    });
    expect(regNovedadesSalud.diseaseType).toEqual('diarrea viral bovina');
    expect(regNovedadesSalud.sickCowsNumber).toEqual(10);
    expect(regNovedadesSalud.paddockID).toEqual(105);
    expect(regNovedadesSalud.diseaseDiscoveryDate).toEqual(new Date('03/29/2016'));
  })
});
