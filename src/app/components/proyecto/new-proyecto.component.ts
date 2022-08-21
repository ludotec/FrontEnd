import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Proyecto } from 'src/app/Model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  @Input() name = '';

  nombreP: string = '';
  descripcionP: string = '';
  lenguage: string = '';
  linkP: string = '';
  label: string = '';
  constructor(private proyectoService: ProyectoService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyect = new Proyecto(this.nombreP, this.descripcionP, this.lenguage, this.linkP );
    this.proyectoService.save(proyect).subscribe({
      next: data => {
        this.label = "Proyecto añadida";
        window.location.reload();
      },
      error: err =>{
        alert("falló");
        window.location.reload();
      },
    })
  }


}
