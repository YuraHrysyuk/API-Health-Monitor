using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace APIHealthMonitorApplication.EntityScenario.DataEntity
{
    public class Scenario
    {
        [Key]
        public Guid ID { get; set; }
        public string Name { get; set; }
        public DateTime CreatedOn { get; set; }
        public ICollection<string> Comments { get; set; }
        public ICollection<Endpoint> Endpoints { get; set; }
    }
}
