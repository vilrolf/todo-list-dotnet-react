using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using RestApi.Models;

namespace RestApi.Controllers
{
    public class TodoTypesController : ApiController
    {
        private RestApiContext db = new RestApiContext();

        // GET: api/TodoTypes
        public IQueryable<TodoType> GetTodoTypes()
        {
            return db.TodoTypes;
        }

        // GET: api/TodoTypes/5
        [ResponseType(typeof(TodoType))]
        public async Task<IHttpActionResult> GetTodoType(int id)
        {
            TodoType todoType = await db.TodoTypes.FindAsync(id);
            if (todoType == null)
            {
                return NotFound();
            }

            return Ok(todoType);
        }

        // PUT: api/TodoTypes/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutTodoType(int id, TodoType todoType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != todoType.Id)
            {
                return BadRequest();
            }

            db.Entry(todoType).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TodoTypeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/TodoTypes
        [ResponseType(typeof(TodoType))]
        public async Task<IHttpActionResult> PostTodoType(TodoType todoType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.TodoTypes.Add(todoType);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = todoType.Id }, todoType);
        }

        // DELETE: api/TodoTypes/5
        [ResponseType(typeof(TodoType))]
        public async Task<IHttpActionResult> DeleteTodoType(int id)
        {
            TodoType todoType = await db.TodoTypes.FindAsync(id);
            if (todoType == null)
            {
                return NotFound();
            }

            db.TodoTypes.Remove(todoType);
            await db.SaveChangesAsync();

            return Ok(todoType);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TodoTypeExists(int id)
        {
            return db.TodoTypes.Count(e => e.Id == id) > 0;
        }
    }
}