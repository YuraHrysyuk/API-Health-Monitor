using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace APIHealthMonitorApplication.EntityScenario.DataEntity
{
    public class Endpoint
    {
        [Key]
        public Guid ID { get; set; }
        public string Name { get; set; }
        public string ConnectionPath { get; set; }
        public DateTime CreatedOn { get; set; }

        public Scenario Scenario { get; set; }
        public Guid ScenarioID { get; set; }
    }
}
