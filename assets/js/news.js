//Render
var news = JSON.parse(sessionStorage.getItem('news'));

function renderNews(arr) {
    var newsInner = $('.news');
    var data = '';
    newsInner.html('');
    console.log(arr.length);

    for(var i = 0; i < arr.length; i++) {
        var row = `<div class="new">
        <a href="#" class="news-link">
            <div style="display: none" class="news-id">${arr[i].id}</div> 
            <img class="news-img" src="${arr[i].img}" alt="">
            <div class="news-content">
                <h3 class="title news-title">${arr[i].title}</h3>
                <span class="description news-description">${arr[i].time}</span>
            </div>
        </a>
    </div>`
        data += row;
    }
    newsInner.html(data);
}
renderNews(news);

if(sessionStorage.getItem('newsItem') === null) {
    sessionStorage.setItem('newsItem', '');
}

function loadDetailNew(arr, el) {
    var newsId = $(el).find('.news-id').text();
    var newsImg = $(el).find('.news-img').attr('src');
    var newsTitle = $(el).find('.news-title').text();
    var newsTime = $(el).find('.news-time').text();
    var newsDescription = arr.find(el => el.id == newsId).description;
    
    window.open("/assets/html/detail_news.html", "_self");
    
    var newsItem = {
        id: newsId,
        img: newsImg,
        time: newsTime,
        title: newsTitle,
        description: newsDescription
    }

    sessionStorage.setItem('newsItem', JSON.stringify(newsItem));
}

$('.news-link').click(function() {
    console.log('hi');
    loadDetailNew(news, this);
})

if(!document.getElementById('news-page')) {
    //renderHomePage
    var renderHomePage = function(arr) {
        var newsInner = $('.news');
        var data = '';
        newsInner.html('');

        for(var i = 0; i < 3; i++) {
            var row = `<div class="new">
            <a href="#" class="news-link">
                <div style="display: none" class="news-id">${arr[i].id}</div> 
                <img class="news-img" src="${arr[i].img}" alt="">
                <div class="news-content">
                    <h3 class="title news-title">${arr[i].title}</h3>
                    <span class="description news-description">${arr[i].time}</span>
                </div>
            </a>
        </div>`
            data += row;
        }
        newsInner.html(data);
    }
    renderHomePage(news);
    if(sessionStorage.getItem('newsItem') === null) {
        sessionStorage.setItem('newsItem', '');
    }
    
    function loadDetailNew(arr, el) {
        var newsId = $(el).find('.news-id').text();
        var newsImg = $(el).find('.news-img').attr('src');
        var newsTitle = $(el).find('.news-title').text();
        var newsTime = $(el).find('.news-time').text();
        var newsDescription = arr.find(el => el.id == newsId).description;
        
        window.open("/assets/html/detail_news.html", "_self");
        
        var newsItem = {
            id: newsId,
            img: newsImg,
            time: newsTime,
            title: newsTitle,
            description: newsDescription
        }
    
        sessionStorage.setItem('newsItem', JSON.stringify(newsItem));
    }
    
    $('.news-link').click(function() {
        console.log('hi');
        loadDetailNew(news, this);
    })
}