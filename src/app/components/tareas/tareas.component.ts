import { Component } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
listTareas: Tarea[] = []
nombreTarea = '';

constructor() {}

ngOnInit(): void {}

agregarTarea(){
  //crear objeto tarea
console.log(this.nombreTarea)

const tarea: Tarea = {
  nombre: this.nombreTarea,
  estado: false
}

  //agregar objeto tarea al array
this.listTareas.push(tarea);

  // reset form

  this.nombreTarea = '';
}

eliminarTarea(index: number): void{
  this.listTareas.splice(index, 1)
}

actualizarTarea(tarea: Tarea, index: number):void {
  this.listTareas[index].estado = !tarea.estado
}
}
