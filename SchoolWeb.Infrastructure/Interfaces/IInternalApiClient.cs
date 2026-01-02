using SchoolWeb.Application.Common;
using SchoolWeb.Application.Dtos;

namespace SchoolWeb.Infrastructure.Interfaces;

public interface IInternalApiClient
{
    Task<ApiResponse<HomePageResponseDto>?> GetHomePageAsync(CancellationToken ct);
}
