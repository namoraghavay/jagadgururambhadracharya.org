SET GLOBAL event_scheduler = 1;

create event archive_events on 
	schedule every 1000 SECOND do 
		update gu.event set IMPORTANCE='A' where EVT_BEGIN_DATE < now();
		
create event archive_news on 
	schedule every 1 DAY do 
		update `gu`.`news`set IMPORTANCE='A' 
			WHERE (YEAR(date)<=YEAR(CURRENT_DATE())-1) AND (DAYOFMONTH(date)<=DAYOFMONTH(CURRENT_DATE())) AND (MONTH(date)<=MONTH(CURRENT_DATE()));
		