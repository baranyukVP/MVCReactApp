using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MVCReactApp.Models;

namespace MVCReactApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MasterController : ControllerBase
    {
        private readonly MasterContext _context;

        public MasterController(MasterContext context)
        {
            _context = context;

            if(_context.Masters.Count() == 0)
            {
                _context.Masters.Add(new Master { Id = 0, Name = "default", Description = "No masters exist" });
                _context.SaveChanges();
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Master>> GetMaster(int id)
        {
            var master = await _context.Masters.FindAsync(id);

            if (master == null)
            {
                return NotFound();
            }

            return master;
        }
    }
}
