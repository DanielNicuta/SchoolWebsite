

using SchoolWeb.Application.Dtos;
using SchoolWeb.Application.Interfaces;
using SchoolWeb.Infrastructure.Interfaces;

namespace SchoolWeb.Infrastructure.Services;

public sealed class ContentService : IContentService
{
    private readonly IInternalApiClient _client;

    public ContentService(IInternalApiClient client) => _client = client;

    public async Task<HomePageResponseDto?> GetHomePageAsync(CancellationToken ct = default)
    {
        var res = await _client.GetHomePageAsync(ct);
        if (res is null || !res.Success) return null;

        return res.Data;
    }
}
