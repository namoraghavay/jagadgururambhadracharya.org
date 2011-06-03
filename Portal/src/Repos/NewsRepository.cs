using System.Collections.Generic;
using guruji.Domain;
using NHibernate;

namespace guruji.Repos
{
    public class NewsRepository : Repository, INewsRepository
    {
        public NewsRepository(ISessionFactory sessionFactory) : base(sessionFactory)
        {
        }

        public NewsItem GetNewsItemById(int id)
        {
            return Load<NewsItem>(id);
        }

        public IList<NewsItem> GetNewsItems()
        {
            var newsItems = RunNamedQuery<NewsItem>("load.important.news.items", null);
            foreach (var item in newsItems)
            {
                item.NewsContent.DescriptionHtml.Replace("<![CDATA[", string.Empty).Replace("]]>", string.Empty);
            }
            return newsItems;
        }

        public IList<NewsItem> GetArchivedNewsItems()
        {
            return RunNamedQuery<NewsItem>("load.archived.news.items", null);            
        }
    }

    public interface INewsRepository : IRepository
    {
        NewsItem GetNewsItemById(int id);
        IList<NewsItem> GetNewsItems();
        IList<NewsItem> GetArchivedNewsItems();
    }
}
