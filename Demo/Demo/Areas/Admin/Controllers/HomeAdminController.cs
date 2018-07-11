using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Demo.Areas.Admin.Controllers
{
    public class HomeAdminController : ApiController
    {
        // GET: api/HomeAdmin
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/HomeAdmin/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/HomeAdmin
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/HomeAdmin/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/HomeAdmin/5
        public void Delete(int id)
        {
        }
    }
}
