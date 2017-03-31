import { Produccion } from './produccion.model';
import { Cow } from "app/cows/shared/cow.model";

describe('Produccion', () => {
  it('should create an instance', () => {
    expect(new Produccion()).toBeTruthy();
  });
  it('should accept values in the constructor', () => {
     let produccion = new Produccion({
     cow: new Cow({id: 70}),
     cantidad: 20,
     regDate: new Date('03/31/2017'),
     calidad: "Buena"
  });
  expect(produccion.cow).toEqual(new Cow({id: 70})); 
  expect(produccion.cantidad).toEqual(20);
  expect(produccion.regDate).toEqual(new Date('03/31/2017'));
  expect(produccion.calidad).toEqual("Buena");
})
});