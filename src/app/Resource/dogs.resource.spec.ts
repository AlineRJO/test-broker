import { TestBed } from '@angular/core/testing';
import { DogsResource } from './dogs.resource';
import { HttpClientTestingModule } from '@angular/common/http/testing';

fdescribe('DogsService', () => {
  let service: DogsResource;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(DogsResource);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getAllBreeds', () => {
    // TODO: UM RECURSO PARA VERIFICAR SE O TESTE ESTÁ FUNCIONANDO É USAR not
    spyOn(service['http'], 'get');
    service.getAllBreeds();
    expect(service['http'].get).not.toHaveBeenCalledWith('https://dog.ceo/api/breeds/list/all');
  });
});
