import { Component, OnInit } from '@angular/core';
import { DogsService } from '../Service/dogs.service';
import { DogsResource } from '../Resource/dogs.resource';
import { PoSelectOption } from '@po-ui/ng-components';
import { FormBuilder, FormGroup } from '@angular/forms';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

  public dogImg: string;
  public nameOptions: PoSelectOption[] = [
    { value: '1', label: 'Akira' },
    { value: '2', label: 'Angel' },
    { value: '3', label: 'Dog' },
    { value: '4', label: 'Sprite' }
  ];
  public breedsOptions: PoSelectOption[] = [];
  public breedChangedName: string;
  public breedForm: FormGroup;
  public disableName = false;

  constructor(
    private dogsSvc: DogsService,
    private dogsRsc: DogsResource,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.breedForm = this.fb.group({
      name: ''
    });

    this.setListener();
    this.changeForm();
    this.getAllBreeds();
  }

  getAllBreeds() {
    this.dogsSvc.preparedAllBreeds();
  }

  changeForm() {
    // TODO: COMO FUNCIONA UM VALUECHANGES NO TESTE?
    this.breedForm.get('name').valueChanges.subscribe(name => {
      this.breedChangedName = name;
    });
  }

  setListener() {
    this.dogsSvc.breedsChangeListener$.subscribe(item => {
      this.breedsOptions = item;
    })
  }

  breedChanged(item: string) {
    if (item === 'african') {
      this.breedChangedName = 'Isso é bicho selvagem!';
      this.disableName = true;
    } else {
      this.breedChangedName = 'Oba agora só escolher um nome';
      this.disableName = false;
    }

    // TODO: O RETORNO VEM EM OUTRO FORMATO MAS CONTÊM MESSAGE
    this.dogsRsc.getDogImgByName(item)
    .pipe(pluck('message'))
    .subscribe((message) => {
      this.dogImg = message;
    });
  }
}
