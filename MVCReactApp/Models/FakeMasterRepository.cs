using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MVCReactApp.Models
{
    public class FakeMasterRepository : IMasterRepository
    {
        public IQueryable<Master> Masters => new List<Master>
        {
            new Master {Id = 0, Name = "Zaga", Description = "Main master"},
            new Master {Id = 1, Name = "Sega", Description = "Main master"},
            new Master {Id = 2, Name = "Arc", Description = "Main master"}
        }.AsQueryable<Master>();
    }
}
