import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MateriasRest } from "../../services/materiasrest";
import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-materia',
  templateUrl: 'materia.html',
})
export class MateriaPage {
  nombre_user:any;
  photo_user:any;
  nc:any;
  
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public materiasrest: MateriasRest,
     public storage:Storage
     ) {
    this.nombre_user=navParams.get("nombre");
    this.photo_user=navParams.get("photo");
    this.storage.get('nc').then((val) => {
      this.nc=val;
      this.materiasrest.getMaterias(this.nc);
    });
    
  
  }
  goMat(): void {
    this.navCtrl.push(MateriaPage, {
    /*  nc: element.nc,*/
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MateriaPage');
  }

}
