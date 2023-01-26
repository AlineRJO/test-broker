import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { useDogsResourceStub } from '../testing/dogs-resource-stub';
import { DogsService } from './dogs.service';

fdescribe('DogsService', () => {
  let service: DogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [useDogsResourceStub]
    });
    service = TestBed.inject(DogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should preparedAllBreeds - com objeto nulo!', () => {
    const mock = {item: {message: 'aaaa'}};
    console.log("mock: ", mock);
    spyOn(service['dogsRsc'], 'getAllBreeds').and.returnValue(of(mock));
    spyOn<any>(service, 'breedsList');

    const spy = spyOn(service['breedsChange'], 'next');
    // service.preparedAllBreeds();
    // expect(spy).toHaveBeenCalled();
  });
});
