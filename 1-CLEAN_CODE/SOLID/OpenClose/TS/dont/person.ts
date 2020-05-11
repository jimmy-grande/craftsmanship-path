namespace CraftsmanshipPath.Solid.OpenClose {
  class Person {
    public readonly firstName;
    public readonly lastName;
    public readonly matricule; // new feature: adding matrivule to person
    
    constructor(firstName, lastName, matricule) { // new feature: adding matrivule to person
      this.firstName = firstName;
      this.lastName = lastName;
      this.matricule = matricule
    }

  }  
}
