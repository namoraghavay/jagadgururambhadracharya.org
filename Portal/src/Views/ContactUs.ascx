<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>
<div class="contactus">
    <span>Contact Us</span>
</div>
<div class="simple_overlay" id="contactus_overlay">
    <a class="close"></a>
    <h3>
        Contact Us</h3>
    <ul>
        <li>
			<p><b>Chitrakuta Ashram</b></p>
			<p>Shri Tulsi Peeth Seva Nyas, Aamodavana, Post Naya Gaon, Chitrakuta, Satna – 485331 (Madhya Pradesh, India)</p>
            <p>Phone: +91-7670-265478</p>
			<p>Email: namoraghavay AT gmail DOT com</p></li>
        <li>
			<p><b>Handicapped University</b></p>
			<p>Jagadguru Rambhadracharya Handicapped University, Karwi, Chitrakuta – 210204 (Uttar Pradesh, India)</p> 
            <p>Phone: +91-5198-224481, +91-5198-224263, +91-5198-224413</p>
            <p>Email: jrhuniversity AT yahoo DOT com</p></li>
        <li><p><b>Haridwar Ashram</b></p>
			<p>Vasishthayanam, Jagadguru Ramanandacharya Road, Rani Street No. 1, Bhupatvala, Haridwar – 249410 
            (Uttaranchal, India)</p> 
            <p>Phone: +91-1334-260323</p></li>
        <li><p><b>Rajkot Ashram</b></p>
			<p>Shri Gita Gyan Mandir, Bhaktinagar Circle, Rajkot – 360002 (Gujarat, India)</p> 
			<p>Phone: +91-281-2364465</p></li>
        <li><p><b>Ghaziabad Office</b></p>
			<p>Shri Tulsi Mandal III-A 67, Nehru Nagar, Ghaziabad – 201001 (Uttar Pradesh, India)</p> 
			<p>Phone: +91-120-4713352, +91-120-4721380</p></li>
        <li><p><b>Magazine Subscription</b></p>
			<p> Dr. Surendra Sharma 'Susheel', D-255, Govindpuram, Ghaziabad – 201013 (Uttar Pradesh, India)</p> 
			<p>Phone: +91-120-2963031, +91-9868932755</p></li>
    </ul>
</div>

<script type="text/javascript">
    $(document).ready(function() {
        $(".contactus").click(function() {
            $("#contactusMask").show();
            $("#contactus_overlay").addClass("overlay_on");
            var leftMargin = ($(window).width() - $("#contactus_overlay").width()) / 2;
            var topMargin = ($(window).height() * .1);
            $(".overlay_on").css("left", leftMargin + 'px');
            $(".overlay_on").css("top", topMargin + 'px');
        });
        $("#contactus_overlay .close").click(function() {
            $("#contactus_overlay").removeClass("overlay_on");
            $("#contactusMask").hide();
        });
    });
</script>

