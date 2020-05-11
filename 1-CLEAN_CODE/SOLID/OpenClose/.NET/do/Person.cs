using System;
using CraftsmanshipPath.Solid.SingleResponsability;

namespace CraftsmanshipPath.Solid.SingleResponsability
{
    public class Person
    {
        public Person(string firstName, string lastName)
        {
            FirstName = firstName;
            LastName = lastName;
        }

        public  string FirstName { get; protected set; } // set the property to protected
        public string LastName { get; protected set; }
    }

    public class Employee : Person
    {
        public Employee(string firstName, string lastName, string matricule): base(firstName, lastName)
        {
            FirstName = firstName;
            LastName = lastName;
            Matricule = matricule;
        }
        public string Matricule { get; }
    }
}
