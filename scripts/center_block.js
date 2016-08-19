function center_block(content) {
    var doc_w = $(window).width();
    var doc_h = $(window).height();
    var cont_w = content.width();
    var cont_h = content.height();
    var cont_padL = parseFloat(content.css("paddingLeft"));
    var cont_padR = parseFloat(content.css("paddingRight"));
    var cont_padT = parseFloat(content.css("paddingTop"));
    var cont_padB = parseFloat(content.css("paddingBottom"));
    if (cont_w >= doc_w) {
        content.css("left", 0);
    } else {
        content.css("left", (doc_w - (cont_w + cont_padL + cont_padR)) / 2);
    }
    if (cont_h >= doc_h) {
        content.css("top", 0);
    } else {
        content.css("top", (doc_h - (cont_h + cont_padT + cont_padB)) / 2);
    }
}

function center_block_h(content) {
    var doc_h = $(window).height();
    var cont_h = content.height();
    var cont_padT = parseFloat(content.css("paddingTop"));
    var cont_padB = parseFloat(content.css("paddingBottom"));
    if (cont_h >= doc_h) {
        content.css("top", 0);
    } else {
        content.css("top", (doc_h - (cont_h + cont_padT + cont_padB)) / 2);
    }
}