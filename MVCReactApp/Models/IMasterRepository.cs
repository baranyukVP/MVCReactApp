using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MVCReactApp.Models
{
    public interface IMasterRepository
    {
        IQueryable<Master> Masters { get; }
    }
}
