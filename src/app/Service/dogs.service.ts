import { Injectable } from '@angular/core';
import { PoSelectOption } from '@po-ui/ng-components';
import { Subject } from 'rxjs';
import { DogsResource } from '../Resource/dogs.resource';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  private breedsChange = new Subject<any>();
  breedsChangeListener$ = this.breedsChange.asObservable();

  constructor(private dogsRsc: DogsResource) { }

  preparedAllBreeds() {
    this.dogsRsc.getAllBreeds().subscribe(item => {
      // TODO: PRIMEIRO PROBLEMA, SE VIER NULL? VALIDACAO
      this.breedsChange.next(this.breedsList(item.message));
    });
  }

  private breedsList(breeds: any) {
    return Object.keys(breeds).map((item) => {
        return {
          label: item,
          value: item
        }
      });
  }
}
