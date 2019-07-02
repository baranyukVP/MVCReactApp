using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MVCReactApp.Models
{
    public class EFMasterRepository : IMasterRepository
    {
        private MasterContext context;
        public EFMasterRepository(MasterContext ctx)
        {
            context = ctx;
        }
        public IQueryable<Master> Masters => context.Masters;
    }
}
