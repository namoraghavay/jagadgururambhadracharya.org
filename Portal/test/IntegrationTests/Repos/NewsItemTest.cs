//using System;
//using Castle.Facilities.NHibernateIntegration;
//using guruji.Domain;
//using guruji.Repos;
//using guruji.WindsorConfig;
//using NUnit.Framework;
//
//namespace PortalTests.IntegrationTests.Repos
//{
//    [TestFixture]
//    public class NewsItemTest
//    {
//        private ISessionManager sessionManager;
//        private INewsItemRepository repository;
//        
//        [SetUp]
//        public void SetUp()
//        {
//            sessionManager = PortalWindsorContainerFactory.GetContainer().Resolve<ISessionManager>();
//            repository = new NewsItemRepository(sessionManager);
//        }
//
//        [Test]
//        public void SaveNewsItem()
//        {
//            var newsItem = new NewsItem
//                           {
//                               Importance = Importance.H,
//                               NewsDate = DateTime.Today.AddDays(-4),
//                               Title = "Jagadguru Rambhadracharya met Pratibha Patil at Rashtrapati Bhavan",
//                               NewsContent = new NewsContent
//                                                 {
//                                                     DescriptionHtmlFileName = "rashtrapati_bhavan.html",
//                                                     SourceCuttingImage = "rashtrapati_bhavan.jpg",
//                                                     SourceName = "Dainik Jagran",
//                                                     Teaser = "Pratibha Patil awarding Jagadguru Rambhadracharya"
//                                                 }
//                           };
//            repository.Save(newsItem);
//            Assert.That(repository.GetNewsItems().Count, Is.EqualTo(4));
//        }
//
//        [Test]
//        public void SaveArchivedNewsItem()
//        {
//            var archivedNewsItem = new NewsItem
//                           {
//                               Importance = Importance.A,
//                               NewsDate = DateTime.Today.AddDays(-6),
//                               Title = "Jagadguru Rambhadracharya met Pratibha Patil at Rashtrapati Bhavan",
//                               NewsContent = new NewsContent
//                                                 {
//                                                     DescriptionHtmlFileName = "rashtrapati_bhavan.html",
//                                                     SourceCuttingImage = "rashtrapati_bhavan.jpg",
//                                                     SourceName = "Dainik Jagran",
//                                                     Teaser = "Pratibha Patil awarding Jagadguru Rambhadracharya"
//                                                 }
//                           };
//            repository.Save(archivedNewsItem);
//            Assert.That(repository.GetArchivedNewsItems().Count, Is.EqualTo(1));
//        }
//    }
//}
