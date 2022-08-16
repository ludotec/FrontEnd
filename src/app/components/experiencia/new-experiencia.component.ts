import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ExperienciaModel } from 'src/app/Model/experiencia-model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  @Input() name = '';

  nombreE: string = '';
  descripcionE: string = '';
  label: string = '';
  constructor(private experienciaService: ExperienciaService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new ExperienciaModel(this.nombreE, this.descripcionE);
    this.experienciaService.save(expe).subscribe({
      next: data => {
        //alert("Experiencia añadida");
        this.label = "Experiencia añadida";
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
