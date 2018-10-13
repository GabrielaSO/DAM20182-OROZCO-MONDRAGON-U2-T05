import { Injectable } from "@angular/core";
import { Http } from "@angular/http"
@Injectable()
export class ApiRest {
  public alumnos: any;
  //recibe el parametro y crea el atributo
  constructor(private http: Http) {

  }
  getUsers(): void {
    this.http.get("http://localhost:8080/restServer2/alumnos.json")
      .subscribe(
        (res) => { //Todo Ok
          this.alumnos = res.json();
          console.log(this.alumnos);
        },
        function (err) { //Error
          console.log(err);
        }
      );
  }
}
