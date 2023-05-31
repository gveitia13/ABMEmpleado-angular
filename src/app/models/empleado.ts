export class Empleado {
  full_name: string
  phone: number
  email: string
  admission_date: Date
  civil_status: string
  sex: string

  constructor(full_name: string, phone: number, email: string, admission_date: Date, civil_status: string, sex: string) {
    this.full_name = full_name;
    this.phone = phone;
    this.email = email;
    this.admission_date = admission_date;
    this.civil_status = civil_status;
    this.sex = sex;
  }
}
