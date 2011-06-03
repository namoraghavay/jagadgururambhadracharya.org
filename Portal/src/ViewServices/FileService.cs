using System.IO;

namespace guruji.ViewServices
{
    public interface IFileService
    {
        bool Exists(string path);
        string Contents(string path);
    }

    public class FileService : IFileService
    {
        public bool Exists(string fileSystemPath)
        {
            return File.Exists(fileSystemPath);
        }

        public string Contents(string fileSystemPath)
        {
            return File.ReadAllText(fileSystemPath);
        }
    }
}