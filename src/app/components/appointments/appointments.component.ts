import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  constructor() { }

  appointments: Array<any> = []
  descricao = new FormControl('')

  ngOnInit(): void {
  }

  create() {
    const now = new Date()
    
    this.appointments.push({
        inicio: now.getHours() + ':' + now.getMinutes(),
        fim: now.getHours() + ':' + now.getMinutes(),
        descricao: this.descricao.value
    })

    console.log(this.appointments)
  }

}
