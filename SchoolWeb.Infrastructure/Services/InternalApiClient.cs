using System.Net.Http.Json;
using System.Text.Json;
using SchoolWeb.Application.Common;
using SchoolWeb.Application.Dtos;
using SchoolWeb.Infrastructure.Interfaces;

namespace SchoolWeb.Infrastructure.Services;

public sealed class InternalApiClient : IInternalApiClient
{
    private static readonly JsonSerializerOptions JsonOptions = new(JsonSerializerDefaults.Web);
    private readonly HttpClient _http;

    public InternalApiClient(HttpClient http) => _http = http;

    public async Task<ApiResponse<HomePageResponseDto>?> GetHomePageAsync(CancellationToken ct)
    {
        // Internal API endpoint: GET /api/page/home
        using var resp = await _http.GetAsync("api/page/home", ct);

        // Try to read the wrapper even on non-2xx (your API returns ApiResponse<T>)
        try
        {
            return await resp.Content.ReadFromJsonAsync<ApiResponse<HomePageResponseDto>>(JsonOptions, ct);
        }
        catch
        {
            return new ApiResponse<HomePageResponseDto>
            {
                Success = false,
                StatusCode = (int)resp.StatusCode,
                Message = $"Failed to read response from Internal API ({(int)resp.StatusCode})."
            };
        }
    }
}
