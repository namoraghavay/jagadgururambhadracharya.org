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
//    public class UserTest
//    {
//        private ISessionManager sessionManager;
//        private IUserRepository repository;
//        private PortalUser portalUser;
//        
//        [SetUp]
//        public void SetUp()
//        {
//            sessionManager = PortalWindsorContainerFactory.GetContainer().Resolve<ISessionManager>();
//            repository = new UserRepository(sessionManager);
//            portalUser = new PortalUser
//                       {
//                           Email = "a@a.com",
//                           FirstName = "man",
//                           MiddleName = "kum",
//                           LastName = "shu",
//                           LastLoginDate = DateTime.Today,
//                           Role = UserRole.Admin,
//                           Status = UserStatus.Active,
//                           SuccessfullLogins = 1,
//                           Password = new Password("password")
//                       };
//        }
//
//        [Test]
//        public void SaveUser()
//        {
//            repository.Save(portalUser);
//            var loadUser = repository.LoadUser(portalUser.Email);
//            Assert.That(loadUser.Email, Is.EqualTo("a@a.com"));
//        }
//
//        [Test]
//        public void DisableUser()
//        {
//            repository.Save(portalUser);
//            repository.DisableUser(portalUser.Email);
//            var loadUser = repository.LoadUser(portalUser.Email);
//            Assert.That(loadUser.Status, Is.EqualTo(UserStatus.Deleted));
//        }
//
//        [TearDown]
//        public void TearDown()
//        {
//            repository.DeleteUser(portalUser.Email);
//            portalUser = null;
//        }
//    }
//}
