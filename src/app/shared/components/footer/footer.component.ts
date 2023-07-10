import { Component } from '@angular/core';
import { Apiservice } from '../../services/crud/apiservice.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(public _Apiservice:Apiservice){}

}
