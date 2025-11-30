# School Website — ASP.NET MVC (Clean Architecture)

A modern school website built using **ASP.NET MVC**, **Clean Architecture**, **SOLID Principles**, and **Domain-Driven Design**.

## Features
- Multi-page school website based on existing structure
- Admin control panel (CMS-like)
- Entity Framework Core + SQL Server
- Repository & Unit of Work patterns
- Services with Dependency Injection
- Cookie banner (GDPR)
- Fully responsive template
- Extendable architecture for reuse in future projects

## Architecture Overview

### Why Clean Architecture?
- Independent layers
- Testable
- Technology-agnostic
- Easy to extend (other school websites, CMS, admin portals)

## SOLID Principles
- **S – Single Responsibility:** Every class has only one reason to change  
- **O – Open/Closed:** Services and controllers depend on abstractions  
- **L – Liskov Substitution:** Interfaces used everywhere  
- **I – Interface Segregation:** No big fat interfaces  
- **D – Dependency Inversion:** DI container injects everything

## Design Patterns Used
- **Repository Pattern**
- **Unit of Work**
- **CQRS (optional, if you want to add later)**
- **Factory Pattern (for mapping view models)**
- **Strategy Pattern (optional for content rendering)**

## Future Enhancements
- CMS Control Panel (Director can edit site)
- Authentication & Role-based Access
- Image Manager
- Blog / News module
