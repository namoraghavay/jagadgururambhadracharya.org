//using System;
//using System.Collections.Generic;
//using Castle.Facilities.NHibernateIntegration;
//using guruji.Domain;
//using guruji.Repos;
//using guruji.WindsorConfig;
//using NUnit.Framework;
//
//namespace PortalTests.IntegrationTests.Repos
//{
//    [TestFixture]
//    public class EventTest
//    {
//        private ISessionManager sessionManager;
//        private IEventRepository repository;
//
//        [SetUp]
//        public void SetUp()
//        {
//            sessionManager = PortalWindsorContainerFactory.GetContainer().Resolve<ISessionManager>();
//            repository = new EventRepository(sessionManager);
//        }
//
//        [Test]
//        public void TestSaveEvent()
//        {
//            var eventToPersist = new Event
//                             {
//                                 Title = "Valmikiya Ramayan at Kanpur",
//                                 IsKatha = true,
//                                 EventBeginDate = DateTime.Today.AddDays(8),
//                                 EventEndDate = DateTime.Today.AddDays(20),
//                                 Importance = Importance.H,
//                                 TelecastBeginDate = DateTime.Today,
//                                 TelecastEndDate = DateTime.Today.AddDays(1),
//                                 EventContent = new EventContent
//                                                    {
//                                                        ContactDetail = new List<Contact>
//                                                                            {
//                                                                                new Contact
//                                                                                    {
//                                                                                        Email = "a@a.com",
//                                                                                        Name = "abc",
//                                                                                        PhoneNumber = "32323453434"
//                                                                                    },
//                                                                                new Contact
//                                                                                    {
//                                                                                        Email = "b@b.com",
//                                                                                        Name = "sds",
//                                                                                        PhoneNumber = "43434343434"
//                                                                                    }
//                                                                            },
//                                                        ContentPageStyle = "Normal",
//                                                        Descrption = "This katha will be based on Valmikiya Ramayan along with Tulsidas Ji rachit Ramcharit Manas",
//                                                        Location = "Motijheel, Kanpur",
//                                                        Image_large = "valmik_ramayan_motijheel_large.png",
//                                                        Image_small = "valmik_ramayan_motijheel_small.png",
//                                                        Teaser = "Divya Valmikiya Ramayan katha"
//                                                    },
//                                 TelecastContent = new TelecastContent
//                                                       {
//                                                           ChannelName = "Sanskar",
//                                                           IsLive = true
//                                                       }
//                             };
//            repository.Save(eventToPersist);
//            var events = repository.GetAllUpcomingEvents();
////            Assert.That(events.Count, Is.EqualTo(1));
//        }
//    }
//}
