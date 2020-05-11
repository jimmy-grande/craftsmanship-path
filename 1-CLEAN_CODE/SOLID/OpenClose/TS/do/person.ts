namespace CraftsmanshipPath.Solid.OpenClose {
  class Person {
    public readonly firstName;
    public readonly lastName;
    
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }

  class Employee extends Person {
    public readonly matricule;
    
    constructor(firstName, lastName, matricule) {
      super(firstName, lastName);
      this.matricule = matricule;
    }
  }
}
