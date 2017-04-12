namespace RestApi.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using RestApi.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<RestApi.Models.RestApiContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(RestApi.Models.RestApiContext context)
        {

            context.Users.AddOrUpdate(x => x.Id,
      new User() { Id = 1, Email = "vilrolf@gmail.com" }

      //,
      //  new User() { Id = 2, Email = "kine@natland.no" },
      //  new User() { Id = 3, Email = "brittsiv@online.no" }
      );
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
        }
    }
}
