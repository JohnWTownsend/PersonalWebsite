using PersonalWebsite.Data;
using PersonalWebsite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PersonalWebsite.Controllers
{
    public class ProjectsController : Controller
    {
        PersonalWebsiteDbCtx ctx = new PersonalWebsiteDbCtx();
        DbManager dbManager = new DbManager();
        // GET: Projects
        public ActionResult Index()
        {
            dbManager.AddRecord("Projects");
            int viewCount = ctx.Visits.Select(x => x).Where(x => x.PageVisited == "Projects").Count();
            ViewBag.ViewCount = viewCount;


            return View();
        }
    }
}