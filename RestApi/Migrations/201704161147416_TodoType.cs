namespace RestApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class TodoType : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.Todoes", name: "Type_Id", newName: "TypeId");
            RenameIndex(table: "dbo.Todoes", name: "IX_Type_Id", newName: "IX_TypeId");
        }
        
        public override void Down()
        {
            RenameIndex(table: "dbo.Todoes", name: "IX_TypeId", newName: "IX_Type_Id");
            RenameColumn(table: "dbo.Todoes", name: "TypeId", newName: "Type_Id");
        }
    }
}
