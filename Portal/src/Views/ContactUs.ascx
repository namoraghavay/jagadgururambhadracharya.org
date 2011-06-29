<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>
<div id="triggers" class="contactus">
    <span>Contact Us</span>
</div>
<div class="simple_overlay" id="contactus_overlay">
    <a class="close"></a>
    <h3>
        Contact Us</h3>
    <ul>
        <li><p>Shri Tulsi Peeth Seva Nyas, Aamodavana, Chitrakuta, Satna (Madhya Pradesh, India)</p>
            <p>Phone: +91-7670-265478</p></li>
        <li><p>Jagadguru Rambhadracharya Vikalang Vishvavidyalaya, Chitrakut Dham Karwi,Chitrakut
            (Uttar Pradesh, India)</p> 
            <p>Phone: +91-5198-224481, +91-5198-224263, +91-5198-224413</p>
            <p>Email: jrhuniversity@yahoo.com</p></li>
        <li><p>Vasishthayanam, Jagadguru Ramanandacharya Road, Rani Street No. 1, Bhupatvala, Haridwar
            (Uttaranchal, India)</p> 
            <p>Phone: +91-1334-260323</p></li>
        <li><p>Shri Gita Gyan Mandir, Bhaktinagar Circle, Rajkot (Gujarat, India)</p> 
        <p>Phone: +91-281-2364465</p></li>
        <li><p>Shri Tulsi Mandal III-A 67, Nehru Nagar, Ghaziabad (Uttar Pradesh)</p> 
        <p>Phone: +91-120-4713352, +91-120-4721380</p></li>
        <li><p> Dr. surendra sharma "susheel", D-255, govindpuram, Ghaziabad (U.P), India</p> 
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

