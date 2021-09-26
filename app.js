var iter = document.getElementsByClassName('ProductCard__imageInner')
// for (var i = 0; i < iter.length; i++) {
//     iter[i].insertAdjacentHTML('afterBegin',
//     '<img src="http://s1.iconbird.com/ico/2014/1/567/w512h5121389807754burnicon.png" class="underpic" style="    position: absolute;    transform: scale(0.09);    margin-top: -130px;    margin-left: -5px;    z-index: 1;" />');
// }

Array.prototype.forEach.call(iter, (el) => {
    // el.style.position = 'relative';
    el.insertAdjacentHTML('afterBegin',
    '<img src="http://s1.iconbird.com/ico/2014/1/567/w512h5121389807754burnicon.png" class="underpic" style="position: absolute; width: 16%; z-index: 1; right: 7%; top: 60%;" />');
})