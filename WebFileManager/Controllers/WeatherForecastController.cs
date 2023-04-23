using Microsoft.AspNetCore.Components.Web.Virtualization;
using Microsoft.AspNetCore.Mvc;
using Model.Patient;
using Persistence;

namespace WebFileManager.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<WeatherForecastController> _logger;
    private readonly PatientContext _context;

    public WeatherForecastController(ILogger<WeatherForecastController> logger, PatientContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet]
    public IEnumerable<WeatherForecast> Get()
    {
        var filesWithLastExamDate = from f in _context.Files
            where f.ExamType != 12
            group f by new { FileId = f.FileId, ExamId = f.ExamId } into g 
             select new { ExamId = g.Key.ExamId, FileId = g.Key.FileId, RecentDate = g.Max(d => d.RecordingTime) };

        var examsWithFiles = from e in _context.Exam
            join f in filesWithLastExamDate on e.ExamId equals f.ExamId into eef
            from ef in eef
            select new
            {
            ef.ExamId,
            ef.RecentDate,
            e.PatientId
            };

var studentsWithLastExamDate = from s in _context.Patient
   join eef in examsWithFiles on s.PatientId equals eef.PatientId into pef
   from ple in pef.DefaultIfEmpty()
   orderby ple.RecentDate
   select new { Patient = s, RecentDate = ple.RecentDate != null ? ple.RecentDate : default };

var result = studentsWithLastExamDate.ToList();

foreach (var item in result)
{
    System.Console.WriteLine($"{item.Patient.LastName} {item.Patient.FirstName} {item.RecentDate}");
}


        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray();
    }
}
