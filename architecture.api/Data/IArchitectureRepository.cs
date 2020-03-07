using System.Collections.Generic;
using System.Threading.Tasks;
using architecture.api.Models;

namespace architecture.api.Data
{
    public interface IArchitectureRepository
    {
         void Add<T>(T entity) where T: class;
         void Delete<T>(T entity) where T: class;
         Task<bool> SaveAll();
         Task<IEnumerable<User>> GetUsers();
         Task<User> GetUser(int id);
    }
}