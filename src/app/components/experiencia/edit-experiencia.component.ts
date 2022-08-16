import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaModel } from 'src/app/Model/experiencia-model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  expLab: ExperienciaModel = null;

  constructor(private experienciaService: ExperienciaService, private activatedRoute: ActivatedRoute,
     private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienciaService.detail(id).subscribe({
      next: data =>{
        this.expLab = data;
      },
      error: err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);}
    });
    document.body.style.backgroundColor = "#00434C";
  }

  onUpdate(): void{
     const id = this.activatedRoute.snapshot.params['id'];
     this.experienciaService.update(id, this.expLab).subscribe({
      next: data =>{
        this.router.navigate(['']);
      },
      error: err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
     });
  }
  
}
