import { of } from "rxjs";
import { DogsResource } from "../Resource/dogs.resource";

export const dogsResourceStub = {
  getAllBreeds: () => {
    return of(null);
  },
  getDogImgByName: () => {
    return of(null);
   }
}

// OUTRA FORMA DE REFERENCIAR UM STUB

export class dogsResourceStubClass {
  getAllBreeds() {
    return of(null);
  }
  getDogImgByName() {
    return of(null);
   }
};

export const useDogsResourceStub = {
  provide: DogsResource,
  useClass: dogsResourceStubClass,
};
