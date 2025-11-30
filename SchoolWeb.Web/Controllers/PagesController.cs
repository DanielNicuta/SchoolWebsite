using Microsoft.AspNetCore.Mvc;

namespace SchoolWeb.Web.Controllers
{
    public class PagesController : Controller
    {
        public IActionResult Istoric() => View();
        public IActionResult Misiunea() => View();
        public IActionResult Organigrama() => View(); // stub for later
        public IActionResult CorpulProfesoral() => View();
        public IActionResult Linkuri() => View();
        public IActionResult Contact() => View();
    }
}
