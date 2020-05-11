class Person {
  #firstName;
  #lastName;
  #matricule; // new feature: adding matricule

  constructor(firstName, lastName, matricule) {
    // new feature: adding matricule
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#matricule = matricule; // new feature: adding matricule
  }

  get firstName() {
    return this.#firstName;
  }

  get lastName() {
    return this.#lastName;
  }

  // new feature: adding matricule
  get matricule() {
    return this.#matricule;
  }
}
