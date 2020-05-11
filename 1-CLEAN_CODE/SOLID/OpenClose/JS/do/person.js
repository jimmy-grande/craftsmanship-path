class Person {
  #firstName;
  #lastName;
  constructor(firstName, lastName) {
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  get firstName() {
    return this.#firstName;
  }

  get lastName() {
    return this.#lastName;
  }
}

class Employee extends Person {
  #matricule
  constructor(firstName, lastName, matricule) {
    super(firstName, lastName)
    this.#matricule = matricule
  }

  get matricule() {
    return this.#matricule
  }
}