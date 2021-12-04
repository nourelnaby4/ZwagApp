using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Zwag.Data;

namespace Zwag.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class ValueController : Controller
    {
        private readonly DataContext db;
        public ValueController(DataContext db)
        {
            this.db = db;
        }
        [HttpGet]
     
        public async Task<ActionResult> GetValues()
        {
            var ListOfValues = await db.Values.ToListAsync();
            return Ok(ListOfValues);
        }
        
    }
}
