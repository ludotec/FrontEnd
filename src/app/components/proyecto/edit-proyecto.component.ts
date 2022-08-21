import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/Model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proye: Proyecto = null;

  constructor(private proyectoService: ProyectoService, private activatedRoute: ActivatedRoute,
     private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectoService.detail(id).subscribe({
      next: data =>{
        this.proye = data;
      },
      error: err =>{
        alert("Error al modificar proyecto");
        this.router.navigate(['']);}
    });
    document.body.style.backgroundColor = "#00434C";
  }

  onUpdate(): void{
     const id = this.activatedRoute.snapshot.params['id'];
     this.proyectoService.update(id, this.proye).subscribe({
      next: data =>{
        this.router.navigate(['']);
      },
      error: err =>{
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      }
     });
  }
  
}
