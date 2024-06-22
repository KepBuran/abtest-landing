const validateCVC = (cvc: string): boolean => {
  const cvcRegex = /^\d{3}$/
  return cvcRegex.test(cvc)
}
  
const validateCreditCardNumber = (number: string): boolean => {
  const numberRegex = /^(\d{4} ){3}\d{4}$/
  return numberRegex.test(number)
}