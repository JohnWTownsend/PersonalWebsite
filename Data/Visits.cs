namespace PersonalWebsite.Data
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Visits
    {
        public Visits()
        {

        }
        public Visits(DateTime dateVisited, string pageVisited)
        {
            DateVisited = dateVisited;
            PageVisited = pageVisited;
        }

        public int ID { get; set; }

        public DateTime DateVisited { get; set; }

        [StringLength(25)]
        public string PageVisited { get; set; }
    }
}
