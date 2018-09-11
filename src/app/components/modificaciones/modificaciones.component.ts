import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { Modificacion } from '../../model/modificacion'

@Component({
  selector: 'app-modificaciones',
  templateUrl: './modificaciones.component.html',
  styleUrls: ['./modificaciones.component.css']
})
export class ModificacionesComponent implements OnInit {

  modificacion: Modificacion;

  renderTable: boolean;

  form: FormGroup;

  constructor() { }

  addUser()
  {
    this.renderTable = false;
    this.renderTable = true;
  }

  ngOnInit() 
  {

    this.form = new FormGroup({
      tipoIdentificacion: new FormControl('', Validators.required),
      noIdentificacion: new FormControl('', Validators.required),
      tipoCartera: new FormControl(''),
      noObligacion: new FormControl(''),
      noCaso: new FormControl(''),
      justificacion: new FormControl('', Validators.required)
    });
    

  }

}
