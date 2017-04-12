namespace RestApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Todo : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Todoes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(nullable: false),
                        Done = c.Boolean(nullable: false),
                        UserId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Todoes", "UserId", "dbo.Users");
            DropIndex("dbo.Todoes", new[] { "UserId" });
            DropTable("dbo.Todoes");
        }
    }
}
