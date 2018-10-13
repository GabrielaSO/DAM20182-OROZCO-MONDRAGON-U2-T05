import { Component } from '@angular/core';
import { NavController,MenuController } from 'ionic-angular';
import { OtherPage } from '../otherPage/otherPage';
import { ApiRest } from "../../services/apirest";
import { Storage } from '@ionic/storage';

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
  constructor(
    public navCtrl: NavController,
     public apirest: ApiRest,
       public menuCtrl: MenuController,
       public storage:Storage
       ) {
    this.apirest.getUsers();
    this.menuCtrl.enable(false, 'mainMenu');
  }
  goToOtherPage(): void {
    console.log("Ingresado User: " + this.credentials.nc);
    console.log("Ingresado Password: " + this.credentials.pass);
    console.log("JSON users" + this.apirest.alumnos);
    let isUser = false;
    this.apirest.alumnos.forEach(element => {
      if (this.credentials.nc === element.nc && this.credentials.pass === element.nip
      ) {
        alert("válido");
        isUser = true;
        this.storage.set('nc', element.nc);
        this.storage.set('nombre', element.nombre);
        this.navCtrl.push(OtherPage, {
          nombre: element.nombre,
        });

      }
    });
    if (!isUser) {
      alert("Error invalido");
    }
    /*TEST
    this.navCtrl.push(OtherPage, {
      nombre:"carolina",
    }
    );*/
  }
  ionViewDidLoad() {
    console.log('Enter on Page');
  }
}
