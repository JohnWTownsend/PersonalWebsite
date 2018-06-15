namespace PersonalWebsite.Data
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class PersonalWebsiteDbCtx : DbContext
    {
        public PersonalWebsiteDbCtx()
            : base("name=PersonalWebsiteDbCtx")
        {
        }

        public virtual DbSet<Visits> Visits { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        }
    }
}
