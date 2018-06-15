using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using PersonalWebsite.Data;
using PersonalWebsite.Models;

namespace PersonalWebsite.Controllers
{
    public class HomeController : Controller
    {
        PersonalWebsiteDbCtx ctx = new PersonalWebsiteDbCtx();
        DbManager dbManager = new DbManager();

        public ActionResult Index()
        {
            dbManager.AddRecord("Home");

            int viewCount = ctx.Visits.Select(x => x).Where(x => x.PageVisited == "Home").Count();
            ViewBag.ViewCount = viewCount;

            return View();
        }

        public JsonResult GetPieChartData()
        {
            List<int> viewsList = ctx.Visits.GroupBy(x => x.PageVisited)
                                            .OrderBy(x => x.Key)
                                            .Select(x => x.Count())
                                            .ToList();
            List<string> sitesList = ctx.Visits.GroupBy(x => x.PageVisited)
                                               .OrderBy(x => x.Key)
                                               .Select(x => x.Key)
                                               .ToList();

            return Json(new { viewslist = viewsList, siteslist = sitesList }, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetLineChartData()
        {
            Dictionary<string,int> views = ctx.Visits.GroupBy(x => DbFunctions.TruncateTime(x.DateVisited))
                                                           .OrderBy(x => x.Key)
                                                           .Select(x => x)
                                                           .ToDictionary(x => x.Key.Value.ToShortDateString(), x => x.Count());
            return Json(new { Labels = views.Keys, Data = views.Values }, JsonRequestBehavior.AllowGet);
        }

    }
}