function getNews() {
    var response;
    var req = new XMLHttpRequest();

    var url = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://www.huffingtonpost.kr/feeds/verticals/korea/index.xml";
    
    req.open('GET', url, true);
    req.onload = function(e) {
        response = JSON.parse(req.responseText);
        if (response) {
            var news = response.responseData.feed.entries;
            Talk2Watch.sendSms(news[0].title);
        }
    };
    req.send(null);
}

getNews();
