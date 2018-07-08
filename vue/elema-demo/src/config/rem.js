(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',    // 旋转
        recalc = function(){    // 字体大小
            var clientWidth = docEl.clientWidth;
            if(!clientWidth) return;
            console.log(clientWidth);
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';    // 设计宽度640 iPhone5
        };

    if(!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);

})(document, window)