module.exports = class UserDTO {
  email;
  firstName;
  lastName;
  id;
  typeOfAccount;
  constructor(model) {
    this.email = model.email
    this.firstName = model.firstName
    this.lastName = model.lastName
    this.id = model.id
    this.typeOfAccount = model.typeOfAccount
  }
}
