using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using SchoolWeb.Application.Interfaces;
using SchoolWeb.Web.Models;

namespace SchoolWeb.Web.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly IContentService _content;

    public HomeController(ILogger<HomeController> logger, IContentService content)
    {
        _logger = logger;
        _content = content;
    }

    public async Task<IActionResult> Index(CancellationToken ct)
    {
        var home = await _content.GetHomePageAsync(ct);

        // Respect your layout: use CMS SEO title if present
        ViewData["Title"] = home?.SeoTitle ?? "Școala Gimnazială Crețeni - Vâlcea";
        ViewData["BodyClass"] = "index-page";

        return View(home);
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
