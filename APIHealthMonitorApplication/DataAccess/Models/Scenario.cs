using System;
using System.Collections.Generic;

namespace DataAccess.Models
{
    public class Scenario
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public DateTime CreatedOn { get; set; }

        public ICollection<EndPointDb> EndPoints { get; set; }

        public Scenario()
        {
            EndPoints = new List<EndPointDb>();
        }
    }
}
