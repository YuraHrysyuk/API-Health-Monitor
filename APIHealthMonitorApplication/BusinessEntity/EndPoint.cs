using System;

namespace BusinessEntity
{
    public class EndPoint
    {
        public int Id { get; set; }

        public int ScenarioId { get; set; }

        public string Name { get; set; }

        public string ConnectionPath { get; set; }

        public string Description { get; set; }

        public DateTime CreatedOn { get; set; } = DateTime.Now;
    }
}
