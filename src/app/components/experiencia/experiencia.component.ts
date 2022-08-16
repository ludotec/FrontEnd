import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExperienciaModel } from 'src/app/Model/experiencia-model';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';
import { EditExperienciaComponent } from './edit-experiencia.component';
import { NewExperienciaComponent } from './new-experiencia.component';



@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  expe: ExperienciaModel[] = [];
  isLogged = false;
  errorMessage = '';
  
  constructor(private experienciaService: ExperienciaService, private tokenService: TokenService, private modalService: NgbModal) { }



  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.isLoggedIn()){
      this.isLogged  = true;
    }else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.experienciaService.list().subscribe({
      next: data => { 
        this.expe = data; 
      },
      error: err => {
        this.errorMessage = err.error.message;
      }
    });
  }

  delete(id?: number){
    if(id != undefined){
      this.experienciaService.delete(id).subscribe({
      next:  data => {
          this.cargarExperiencia();
        },
        error: err => {
          alert("No se pudo borrar la experiencia");
        }
      });
    }
  }

  openNewExp() {
    const modalRef = this.modalService.open(NewExperienciaComponent);
    modalRef.componentInstance.name = 'World';
  }
  
          
}


