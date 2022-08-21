import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Proyecto } from 'src/app/Model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';
import { NewProyectoComponent } from './new-proyecto.component';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  proye: Proyecto[] = [];
  isLogged = false;
  errorMessage = '';
  
  constructor(private proyectoService: ProyectoService, private tokenService: TokenService, private modalService: NgbModal) { }



  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.isLoggedIn()){
      this.isLogged  = true;
    }else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void {
    this.proyectoService.list().subscribe({
      next: data => { 
        this.proye = data; 
      },
      error: err => {
        this.errorMessage = err.error.message;
      }
    });
  }

  delete(id?: number){
    if(id != undefined){
      this.proyectoService.delete(id).subscribe({
      next:  data => {
          this.cargarProyecto();
        },
        error: err => {
          alert("No se pudo borrar el proyecto");
        }
      });
    }
  }

  openNewPro() {
    const modalRef = this.modalService.open(NewProyectoComponent);
    modalRef.componentInstance.name = 'World';
  }
  
  

}
