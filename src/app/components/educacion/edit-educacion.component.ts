import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/Model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  educ: Educacion = null;
  constructor(private educacionService: EducacionService, private activatedRoute: ActivatedRoute,
    private router: Router) { }

 ngOnInit(): void {
   const id = this.activatedRoute.snapshot.params['id'];
   this.educacionService.detail(id).subscribe({
     next: data =>{
       this.educ = data;
     },
     error: err =>{
       alert("Error al modificar educación");
       this.router.navigate(['']);}
   });
   document.body.style.backgroundColor = "#00434C";
 }

 onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.educacionService.update(id, this.educ).subscribe({
     next: data =>{
       this.router.navigate(['']);
     },
     error: err =>{
       alert("Error al modificar educación");
       this.router.navigate(['']);
     }
    });
 }
}
