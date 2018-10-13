import { Component } from "@angular/core";
import { NavController, NavParams ,MenuController} from "ionic-angular";
import { MateriasRest } from "../../services/materiasrest";
import { MateriaPage } from '../materia/materia';

@Component({
  selector: 'other-page',
  templateUrl: 'otherPage.html'
})
export class OtherPage {
  nombre_user:any;
  photo_user:any;
  constructor(
    public navCtrl: NavController,
    public materiasrest: MateriasRest,
    public navParams: NavParams,
    public menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(true, 'mainMenu');
    this.nombre_user=navParams.get("nombre");
    this.photo_user=navParams.get("photo");
   // this.materiasrest.getMaterias();
  }
  goMat(): void {
    this.navCtrl.push(MateriaPage, {
      /*  nc: element.nc,*/
    });
  }
  onPageWillEnter() {
    console.log('Enter on Page');
  }
}
