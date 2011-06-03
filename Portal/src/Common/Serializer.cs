using System;
using System.IO;
using System.Text;
using System.Xml.Serialization;

namespace guruji.Common
{
    public class Serializer : ISerializer
    {
        public virtual T Deserialize<T>(string xml)
        {
            var serializer = new XmlSerializer(typeof(T));
            return (T)serializer.Deserialize(new StringReader(xml));
        }

        public string Serialize(object obj)
        {
            var serializer = new XmlSerializer(obj.GetType());
            var stringBuilder = new StringBuilder();
            var stringWriter = new StringWriter(stringBuilder);
            serializer.Serialize(stringWriter, obj);
            return stringWriter.ToString();
        }

        public T Deserialize<T>(string xml, Action<T> action)
        {
            var t = Deserialize<T>(xml);
            action(t);
            return t;
        }
    }

    public interface ISerializer
    {
        T Deserialize<T>(string xml);
        T Deserialize<T>(string input, Action<T> action);
        string Serialize(object obj);
    }
}
