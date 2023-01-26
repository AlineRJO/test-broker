import { Component, OnInit } from '@angular/core';
import { DogsService } from '../Service/dogs.service';
import { DogsResource } from '../Resource/dogs.resource';
import { PoSelectOption } from '@po-ui/ng-components';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

  public dogImg: string;
  public breedsOptions: PoSelectOption[] = [];
  public breedChangedName: string;
  public breedForm: FormGroup;

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
    this.getAllBreeds();
  }

  getAllBreeds() {
    this.dogsSvc.preparedAllBreeds();
  }

  changeForm() {
    // TODO: COMO FUNCIONA UM VALUECHANGES?
    // TODO: COMO SIMULAR ?
    this.breedForm.valueChanges.subscribe(item => {
      console.log("item: ", item);
      this.breedChangedName = item.name;
    });
  }

  setListener() {
    this.dogsSvc.breedsChangeListener$.subscribe(item => {
      this.breedsOptions = item;
    })
  }

  breedChanged(item: string) {
    // TODO: O RETORNO VEM EM OUTRO FORMATO MAS CONTÊM MESSAGE
    this.dogsRsc.getDogImgByName(item).subscribe(({message}) => {
      this.dogImg = message;
    });
  }
}
