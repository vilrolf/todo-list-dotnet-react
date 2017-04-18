using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RestApi.Models
{
   public class User
    {
        public int Id { get; set; }
        [Required]
        public string Email { get; set; }

        public string Name { get; set; }
    }
}
