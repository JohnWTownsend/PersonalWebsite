using PersonalWebsite.Models;
using PersonalWebsite.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PersonalWebsite.Views.About
{
    public class AboutController : Controller
    {
        DbManager dbManager = new DbManager();
        PersonalWebsiteDbCtx ctx = new PersonalWebsiteDbCtx();
        // GET: About
        public ActionResult Index()
        {
            dbManager.AddRecord("About");

            int viewCount = ctx.Visits.Select(x => x).Where(x => x.PageVisited == "About").Count();
            ViewBag.ViewCount = viewCount;

            return View();
        }
    }
}