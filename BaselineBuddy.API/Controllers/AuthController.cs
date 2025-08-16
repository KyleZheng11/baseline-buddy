using Microsoft.AspNetCore.Mvc;

namespace BaselineBuddy.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            // Your logic to save username to database
            return Ok(new { message = "Username stored successfully" });
        }
    }

    public class LoginRequest
    {
        public string Username { get; set; } = string.Empty;
    }
}