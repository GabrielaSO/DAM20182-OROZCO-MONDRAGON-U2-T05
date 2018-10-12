import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class MateriasRest {
    public materias: any;

    constructor(private http: Http) {
 
    }
    getMaterias(): void {
        this.http.get("http://127.0.0.1:8080/materias.json")
            .subscribe((res) => {
                this.materias = res.json();
                console.log(this.materias);
            },
                (err) => {
                    console.log(err);
                });

    }
}