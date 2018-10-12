import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OtherPage } from "../otherPage/otherPage";
import { ApiRest } from "../../services/apirest";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  nombre: any;
  photo: any;
  private credentials: any = {
    nc: '',
    pass: ''
  };

  constructor(public navCtrl: NavController, public apirest: ApiRest) {
    this.apirest.getUsers();
  }

  goToOtherPage(): void {
    //console.log('Ir hacia otra página');
    console.log("Ingresado User: " + this.credentials.nc);
    console.log("Ingresado Password: " + this.credentials.pass);
    console.log("JSON users" + this.apirest.alumnos);
    let isUser = false;
    this.apirest.alumnos.forEach(element => {
      if (this.credentials.nc === element.nc && this.credentials.pass === element.pass
      ) {
        alert("válido");
        isUser = true;
        this.navCtrl.push(OtherPage, {
          nombre: element.nombre,
        });

      }
    });
    if (!isUser) {
      alert("Error invalido");
    }
  }
  ionViewDidLoad() {
    console.log('Enter on Page');
  }

}