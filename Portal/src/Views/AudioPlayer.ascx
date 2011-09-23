<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl<guruji.ViewModels.AudioPlayerViewModel>" %>

<div id="<%=Model.JwPlayerId %>"></div>
<script type="text/javascript" src="/ViewContent/js/jwplayer.js"></script>
<script type="text/javascript">
    $(document).ready(function() {
        jwplayer("<%=Model.JwPlayerId %>").setup({
            'flashplayer': "/ViewContent/flash/jwplayer.swf",
            'skin': "/ViewContent/flash/jwplayerskin.zip",
            'stretching': "exactfit",
            'allowfullscreen': 'false', 
            'autostart': 'false',
            'icons': 'true',
            'controlbar.position': "bottom",
            'height':'32',
            'file': '<%= "/ViewContent/audio_gallery/"+Model.SelectedAlbum+"/"+Model.JwPlayerId+".mp3" %>'
        });
    });  
</script>   
