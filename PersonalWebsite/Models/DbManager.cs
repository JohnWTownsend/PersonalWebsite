using PersonalWebsite.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PersonalWebsite.Models
{
    public class DbManager
    {
        public PersonalWebsiteDbCtx ctx = new PersonalWebsiteDbCtx();

        public void AddRecord(string pageName)
        {
            ctx.Visits.Add(new Visits(DateTime.Now, pageName));
            ctx.SaveChanges();
        }

    }
}