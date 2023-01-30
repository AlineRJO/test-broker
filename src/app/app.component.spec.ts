import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PoMenuModule, PoPageModule, PoToolbarModule } from '@po-ui/ng-components';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        PoMenuModule,
        PoPageModule,
        PoToolbarModule,
        RouterTestingModule
      ],
      providers: [AppComponent]
    });
    component = TestBed.inject(AppComponent);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

});
