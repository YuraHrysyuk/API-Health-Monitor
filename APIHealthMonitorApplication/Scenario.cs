﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIHealthMonitorApplication
{
    public class Scenario
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public DateTime CreatedOn { get; set; } = DateTime.Now;
    }
}
