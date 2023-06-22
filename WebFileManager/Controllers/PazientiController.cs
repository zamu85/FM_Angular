using Commonality.Dto.Patient;
using Microsoft.AspNetCore.Mvc;
using Model.Patient;
using Persistence;

namespace WebFileManager.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class PazientiController : ControllerBase
    {
        private readonly PatientContext _context;
        private readonly ILogger<PazientiController> _logger;

        public PazientiController(ILogger<PazientiController> logger, PatientContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet]
        public PatientDto GetPatient(int id)
        {
            Patient patient = _context.Patient.FirstOrDefault(p => p.PatientId == id);

            if (patient == null)
            {
                return null;
            }

            return new PatientDto()
            {
                BirthDate = patient.BirthDate,
                LastName = patient.LastName,
                FirstName = patient.FirstName,
                PatientId = patient.PatientId
            };
        }

        [HttpGet]
        public IEnumerable<PatientDto> GetPatients()
        {
            IQueryable<PatientDto> patients = from s in _context.Patient
                select new PatientDto
                {
                    BirthDate = s.BirthDate,
                    LastName = s.LastName,
                    FirstName = s.FirstName,
                    PatientId = s.PatientId
                };

            return patients;
        }
    }
}