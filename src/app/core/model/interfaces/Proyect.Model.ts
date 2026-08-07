export interface CreateProyect {
  projectId: number,
  projectName: string
  clientName: string
  startDate: string
  leadByEmpId: number
  contactPerson: string
  contactNo: string
  emailId: string
}

export interface Proyect extends CreateProyect{
 employeeName: string
}


