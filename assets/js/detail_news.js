window.addEventListener('DOMContentLoaded', function() {
    var detailNew = null;
    try {
        detailNew = JSON.parse(sessionStorage.newsItem); 
    } catch (e) {
        detailNew = sessionStorage.newsItem;
    }

    $('.detail-news-title').text(detailNew.title);
    $('.detail-news-time').text(detailNew.time);
    $('.detail-news-img').attr('src', detailNew.img);
    $('.detail-news-description').text(detailNew.description);
})