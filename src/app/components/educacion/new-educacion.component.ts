import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Educacion } from 'src/app/Model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  @Input() name = '';

  nombreE: string = '';
  descripcionE: string = '';
  label: string = '';
  constructor(private educacionService: EducacionService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new Educacion(this.nombreE, this.descripcionE);
    this.educacionService.save(expe).subscribe({
      next: data => {
        //alert("Educación añadida");
        this.label = "Educación añadida"
        window.location.reload();
        //this.router.navigate(['']);
      },
      error: err =>{
        alert("falló");
        window.location.reload();
        //this.router.navigate(['']);
      },
    })
  }


}
