export class EmployeeModel {
  employeeId: number = 0;
  employeeName: string = '';
  contactNo: string = '';
  emailId: string = '';
  deptId: number = 0;
  password: string = '';
  gender: string = '';
  role?: string = '';
  createdDate: Date = new Date();
}