import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { DogsResource } from '../Resource/dogs.resource';
import { dogsResourceStub, useDogsResourceStub } from '../testing/dogs-resource-stub';
import { dogsServiceStub } from '../testing/dogs-service-stub';
import { DogsComponent } from './dogs.component';

describe('DogsComponent', () => {
  let component: DogsComponent;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        DogsComponent,
        FormBuilder,
        dogsServiceStub,
        {
          provide: DogsResource,
          useValue: dogsResourceStub
        },
        // useDogsResourceStub
       ]
    });
    component = TestBed.inject(DogsComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnInit', () => {
    spyOn(component, 'setListener');
    spyOn(component['dogsSvc'], 'preparedAllBreeds');

    component.ngOnInit();

    // TODO: TESTANDO A CRIAÇÃO DO FORM
    expect(Object.keys(component.breedForm.value)).toEqual(['name']);
    expect(component.setListener).toHaveBeenCalled();
    expect(component['dogsSvc'].preparedAllBreeds).toHaveBeenCalled();
  });


  it('should changeForm', () => {
    component.breedForm = component['fb'].group({
      name: ''
    });
    // TODO: COMO QUE SE TESTA VALUECHANGES?
    component.changeForm();
    component.breedForm.get('name').setValue('Bulldog');
    expect(component.breedChangedName).toEqual('Bulldog');
  });


  // TODO: O METODO POSSUI CONDICIONAL COSTUMO USAR DESCRIBE
  // TODO: ATENÇÃO COM REPETIÇÃO DE CÓDIGO!
  describe('#breedChanged', () => {
    const mock = {status: true, message: 'cao.jpg'};
    it('Load image', () => {
      spyOn(component['dogsRsc'], 'getDogImgByName').and.returnValue(of(mock));
      component.breedChanged('Bulldog');
      expect(component.dogImg).toEqual(mock.message);
    });


    xit('Is African breed', () => {
      // TODO: ERRO POR FALTA DE CONFIGURAÇÃO DO RETORNO
      // TODO: ATENÇÃO A ORDEM DE EXECUÇÃO - A CONFIGURAÇÃO DO TESTE TEM QUE VIR ANTES DA CHAMADA

      component.breedChanged('african');
      spyOn(component['dogsRsc'], 'getDogImgByName').and.returnValue(of(mock));
      component.disableName = false;
    });


    // TODO: O QUE SÃO MATCHERS?
    it('Is not African breed', () => {
      component.disableName = true;
      spyOn(component['dogsRsc'], 'getDogImgByName').and.returnValue(of(mock));
      component.breedChanged('akita');
      expect(component.breedChangedName).toEqual('Oba agora só escolher um nome');
      expect(component.disableName).toBeFalse();
    });
  });



  xit('should setListener', () => {
    const mock = [
      {
        label: 'Bulldog',
        value: 1
      }
    ];

    // TODO: breedsChangeListener$ NÃO É UMA FUNÇÃO!
    spyOn<any>(component['dogsSvc'], 'breedsChangeListener$').and.returnValue(of(mock));

    // component['dogsSvc'].breedsChangeListener$ = of(mock);

    component.setListener();
    expect(component.breedsOptions).toEqual(mock);
  });
});
