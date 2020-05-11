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

        public  string FirstName { get; set; } // DO NOT set the property public
        public string LastName { get; set; } // DO NOT set the property public
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
