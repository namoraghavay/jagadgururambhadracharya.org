using System.Web.Mvc;
using guruji.Domain;
using guruji.Mappers;
using guruji.Services;
using guruji.ViewModels;

namespace guruji.Controllers
{
    public class EventController : BaseController
    {
        private readonly IContentService contentService = ContentService.Instance();

        [PortalAuthorize(Roles = UserRole.Admin)]
        public ActionResult SaveOrUpdateEvent(EventForm eventForm)
        {
            var eventMapper = new EventMapper();
            contentService.SaveOrUpdateEvent(eventMapper.MapFormToDomain(eventForm));
            return GetUpcomingEvents();
        }

        [PortalAuthorize(Roles = UserRole.Admin)]
        public ActionResult DeleteEvent(EventForm eventForm)
        {
            contentService.DeleteEvent(contentService.LoadEventById(eventForm.Id));
            return GetUpcomingEvents();
        }

        [PortalAuthorize(Roles = UserRole.Admin | UserRole.General | UserRole.Guest)]
        public ActionResult GetUpcomingEvents()
        {
            var eventsViewModel = new EventsViewModel
                                {
                                    Events = contentService.GetUpcomingEvents(),
                                    DefaultTab = EventsKathasTabs.Events
                                };
            return View("EventsHome", eventsViewModel);
        }

        [PortalAuthorize(Roles = UserRole.Admin | UserRole.General | UserRole.Guest)]
        public ActionResult GetUpcomingKathas()
        {
            var kathasViewModel = new EventsViewModel
                                {
                                    Kathas = contentService.GetUpcomingKathas(),
                                    DefaultTab = EventsKathasTabs.Katha
                                };
            return View("EventsHome", kathasViewModel);
        }
    }
}
