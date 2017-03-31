import { Novedades } from './novedades.model';
import { Cow } from "app/cows/shared/cow.model";

describe('Novedades', () => {
  it('should create an instance', () => {
    expect(new Novedades()).toBeTruthy();
  });
  it('should accept values in the constructor', () =>{
  let novedades = new Novedades({
    vaca: new Cow({id:50}),
    newDate: new Date('03/31/2017'),
    veterinario: 'rodolfo',
    novedad:'está preñada' });
    expect(novedades.vaca).toEqual(new Cow({id:50}));
    expect(novedades.newDate).toEqual(new Date('03/31/2017'));
    expect(novedades.veterinario).toEqual('rodolfo');
    expect(novedades.novedad).toEqual('está preñada');
  })
});
