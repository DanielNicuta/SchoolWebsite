using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SchoolWeb.Application.Interfaces;
using SchoolWeb.Infrastructure.Interfaces;
using SchoolWeb.Infrastructure.InternalApi;
using SchoolWeb.Infrastructure.Services;

namespace SchoolWeb.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
    {
        var baseUrl = configuration.GetSection(InternalApiOptions.SectionName).GetValue<string>("BaseUrl");

        if (string.IsNullOrWhiteSpace(baseUrl))
            throw new InvalidOperationException("Missing config: InternalApi:BaseUrl");

        services.AddHttpClient<IInternalApiClient, InternalApiClient>(http =>
        {
            http.BaseAddress = new Uri(baseUrl);
            http.Timeout = TimeSpan.FromSeconds(10);
        });

        services.AddScoped<IContentService, ContentService>();

        return services;
    }
}
