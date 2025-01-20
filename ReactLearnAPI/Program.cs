using Microsoft.EntityFrameworkCore;
using ReactLearnAPI.Configs;
using ReactLearnAPI.DB;
using ReactLearnAPI.DB.Reps;
using ReactLearnAPI.DB.Reps.Interfaces;
using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection")
                       ?? throw new Exception("Connection string is not exist in configuration file.");

var cors = builder.Configuration.GetSection("Cors").Get<Cors>()
           ?? throw new Exception("Cors configuration is not exist in configuration file.");

// Add services to the container.

builder.Services.AddDbContext<AppDbCtx>(options =>
{
    options.UseSqlServer(connectionString);
});

builder.Services.AddCors(options =>
{
    options.AddPolicy(cors.PolicyName, config =>
    {
        config.WithOrigins(cors.Options.Addresses)
            .WithMethods(cors.Options.Methods)
            .WithHeaders(cors.Options.Headers);
    });
});

builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.MapScalarApiReference(o =>
{
    o.WithDefaultHttpClient(ScalarTarget.CSharp, ScalarClient.HttpClient);
});

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
