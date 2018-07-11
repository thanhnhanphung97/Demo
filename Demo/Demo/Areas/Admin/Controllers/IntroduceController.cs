using Demo.Models.DTO;
using Demo.Models.DAO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;
using System.Web.Http.Description;

namespace Demo.Areas.Admin.Controllers
{
    //[EnableCors(origins: "http://localhost:4300", headers: "*", methods: "*")]
    public class IntroduceController : ApiController
    {
        //GET All Introduces: api/Introduce 
        public JsonResult<object> GetIntroduces()
        {
            List<IntroducesDTO> list = IntroducesDAO.Instance.GetListIntroducts();
            return Json((object)list);
        }

        //Get introduce by id: api/Introduce/{id}
        [ResponseType(typeof(IntroducesDTO))]
        public IHttpActionResult GetIntroduce(int id)
        {
            IntroducesDTO intro = IntroducesDAO.Instance.GetIntroducts(id);
            if (intro == null)
            {
                return NotFound();
            }
            return Ok(intro);
        }

        //Put introduce: api/Introduce 
        [ResponseType(typeof(void))]
        public IHttpActionResult PutIntroduce(int id, IntroducesDTO introduce)
        {
            if (EditIntroduce(id, introduce.Name, introduce.Img, introduce.Data, introduce.Describe, introduce.Color)) return StatusCode(HttpStatusCode.NoContent);
            else return BadRequest();
        }
        bool EditIntroduce(int id, string name, string img, float data, string describe, string color)
        {
            return IntroducesDAO.Instance.EditIntroduces(id, name, img, data, describe, color);
        }

        // POST: api/Introduce 
        [ResponseType(typeof(IntroducesDTO))]
        public IHttpActionResult PostIntroduce(IntroducesDTO introduce)
        {
            if (InsertIntroduce(introduce.Name, introduce.Img, introduce.Data, introduce.Describe, introduce.Color))
                return CreatedAtRoute("DefaultApi", new { id = introduce.Id }, introduce);
            else return BadRequest();
        }
        bool InsertIntroduce(string name, string img, float data, string describe, string color)
        {
            return IntroducesDAO.Instance.InsertIntroduces(name, img, data, describe, color);
        }
        // DELETE: api/Introduce/{id}
        [ResponseType(typeof(IntroducesDTO))]
        public IHttpActionResult DeleteIntroduce(int id)
        {
            if (RemoveIntroduce(id)) return Ok();
            else return BadRequest();
        }
        bool RemoveIntroduce(int id)
        {
            return IntroducesDAO.Instance.DeleteIntroduces(id);
        }
    }
}
