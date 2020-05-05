$(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
    $('.tooltipped').tooltip();
});

$("#top").click(() => {
    $("html, body").animate({ scrollTop: 0 }, "slow");
});

