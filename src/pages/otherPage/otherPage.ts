import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { MateriasRest } from "../../services/materiasrest";
import { MateriasPage } from "../materiasPage/materiasPage";

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
        public navParams: NavParams
    ) {
        this.nombre_user=navParams.get("nombre");
        this.photo_user=navParams.get("photo");
        this.materiasrest.getMaterias();
    }

    goMat(): void {
        this.navCtrl.push(MateriasPage, {
            nc: element.nc,
        });
    }

    onPageWillEnter() {
        console.log('Enter on Page');
    }
}