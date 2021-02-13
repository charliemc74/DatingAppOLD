using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
         [Required]
         [StringLength(10)]
         public string UserName { get; set; }   

         [Required]
         [StringLength(10)]
         public string Password { get; set; }   
    }
}