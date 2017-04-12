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
    public class TodoesController : ApiController
    {
        private RestApiContext db = new RestApiContext();

        // GET: api/Todoes
        public IQueryable<Todo> GetTodoes()
        {
            return db.Todoes;
        }

        // GET: api/Todoes/5
        [ResponseType(typeof(Todo))]
        public async Task<IHttpActionResult> GetTodo(int id)
        {
            Todo todo = await db.Todoes.FindAsync(id);
            if (todo == null)
            {
                return NotFound();
            }

            return Ok(todo);
        }

        // PUT: api/Todoes/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutTodo(int id, Todo todo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != todo.Id)
            {
                return BadRequest();
            }

            db.Entry(todo).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TodoExists(id))
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

        // POST: api/Todoes
        [ResponseType(typeof(Todo))]
        public async Task<IHttpActionResult> PostTodo(Todo todo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Todoes.Add(todo);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = todo.Id }, todo);
        }

        // DELETE: api/Todoes/5
        [ResponseType(typeof(Todo))]
        public async Task<IHttpActionResult> DeleteTodo(int id)
        {
            Todo todo = await db.Todoes.FindAsync(id);
            if (todo == null)
            {
                return NotFound();
            }

            db.Todoes.Remove(todo);
            await db.SaveChangesAsync();

            return Ok(todo);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TodoExists(int id)
        {
            return db.Todoes.Count(e => e.Id == id) > 0;
        }
    }
}