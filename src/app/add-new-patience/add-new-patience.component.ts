import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-new-patience',
  templateUrl: './add-new-patience.component.html',
  styleUrls: ['./add-new-patience.component.css']
})
export class AddNewPatienceComponent {

  // constructor(private httpClient: HttpClient) {}
  saveNewPatient(patient: any) {
    console.log(patient);
    const paciente = {
      nombre: patient.value.nombre,
      apellido: patient.value.apellido,
      email: patient.value.email,
      numeroDocumento: patient.value.nrodoc,
      fechaNacimiento: patient.value.fechanac,
      telefono: patient.value.telefono
    };
    console.log(paciente);
    // this.httpClient.post('URL_DEL_SERVIDOR', paciente)
    //   .subscribe(
    //     (response) => console.log(response),
    //     (error) => console.log(error)
    //   );
  }
}
