using System.Linq;
using API.DTOs;
using API.entities;
using API.Extensions;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles(){
            CreateMap<Photo,PhotoDto>();
            CreateMap<AppUser, MemberDto>().ForMember(dest => dest.PhotoUrl, 
                                                      opt => opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url));
            CreateMap<AppUser, MemberDto>().ForMember(dest => dest.Age, 
                                                      opt => opt.MapFrom(src => src.DateOfBirth.CalculateAge()));
                        
        }
    }
}