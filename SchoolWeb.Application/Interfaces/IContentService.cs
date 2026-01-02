using SchoolWeb.Application.Dtos;

namespace SchoolWeb.Application.Interfaces;

public interface IContentService
{
    Task<HomePageResponseDto?> GetHomePageAsync(CancellationToken ct = default);
}
