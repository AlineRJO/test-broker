import { TestBed } from '@angular/core/testing';
import { DogsResource } from './dogs.resource';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { useDogsResourceStub } from '../testing/dogs-resource-stub';
// TODO: FIQUEM ATENTOS COM O NOME DOS TESTE ELE AJUDA A LOCALIZAR COM O COMPONENTE COM PROBLEMA
xdescribe('DogsService.', () => {
  let service: DogsResource;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      // TODO: É UM RESOURCE MAS É ELE QUE ESTAMOS TESTANDO ENTÃO NÃO USA MOCK!
      providers: [
         useDogsResourceStub
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
    expect(service['http'].get).toHaveBeenCalledWith('https://dog.ceo/api/breeds/list/all');
  });
});
