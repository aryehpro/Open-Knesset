var NAV_SUFFIX = '#nav-';

var Members = function ()  {
    var i = new BreadCrumb();
    i.name = 'member';
    i.nav_id = NAV_SUFFIX + 'members';
	i.one_liner = function (item) {
		return item.name
	};
    i.div_view = function (item) { 
        return [item.start_date, item.end_date].join('\t');
    };
    return i;
};

var PastVotes = function ()  {
    var i = new BreadCrumb();
    i.name = 'vote';
    i.nav_id = NAV_SUFFIX + 'past-votes';
    i.one_liner = function (item) {
        var t = item.time.split(' ')[0];
        return [t, item.title].join("\t");
    };
    i.div_view = function (item) { 
        if ((item.summary === null)|(item.summary == '')){
            summary = "מצטערים! אין תקציר זמין לחוק זה";
        } else {
            summary = item.summary;
        };
        if (item.full_text_url === null) {
            link = "";            
        } else {    
            link = '<a href="' + item.full_text_url + '">קישור לחוק המלא</a>'
        };
        var t = item.time.split(' ')[1];
        return [t, summary, link].join('<br />');
    };
    return i;
};

var Parties = function ()  {
    var i = new BreadCrumb();
    i.name = 'party';
    i.nav_id = NAV_SUFFIX + 'parties';
	i.one_liner = function (item) {
		return item.name;
	};
    i.div_view = function (item) { 
        return [item.start_date, item.end_date].join('\t');
    };
    return i;
};

$(document).ready (function () {
    jsr(PastVotes);
});
