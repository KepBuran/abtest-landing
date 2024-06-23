export type ValidationFunc = (value: any) => { isValid: boolean, value: string }
export interface InputValue {
  value: string,
  isValid: boolean
}