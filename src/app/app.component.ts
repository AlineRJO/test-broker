import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title: string = 'Tela Inicial';
  readonly menus: Array<PoMenuItem> = [
    { label: 'Dogs', action: () => this.onClick('dogs')},
  ];

  constructor(public route: Router) {}

  private onClick(url: string) {
    this.title = url;
    this.route.navigateByUrl(`/${url}`);
  }

}
