using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RestApi.Models
{
     public class Todo
    {
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        public bool Done { get; set; }

        // Foreign Key
        public int UserId { get; set; }
        // Navigation property
        public User User { get; set; }

        public int? TypeId { get; set; }

        public virtual TodoType Type { get; set; }

        public string Description { get; set; }
    }
}
