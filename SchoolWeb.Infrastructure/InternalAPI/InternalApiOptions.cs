namespace SchoolWeb.Infrastructure.InternalApi;

public sealed class InternalApiOptions
{
    public const string SectionName = "InternalApi";
    public string BaseUrl { get; init; } = string.Empty;
}
