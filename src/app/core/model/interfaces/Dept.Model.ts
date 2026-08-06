 export interface ParentDeptModel {
      "departmentId": number,
      "departmentName": string,
      "departmentLogo": string
    }

export interface ChildDeptModel {
      "childDeptId": number,
      "parentDeptId": number,
      "departmentName": string
}