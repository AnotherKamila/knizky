//(function() {

function $(id)   { return document.getElementById(id) }
function $$(cls) { return document.getElementsByClassName(cls) }

// show the selected book's details in a modal
function hide_detail() {
    console.log('gonna hide')
    $('detail').className = ''
}

function show_detail(id) {
    console.log('gonna show')
    $('detail-cover').src = $(id).getAttribute('data-cover')
    $('detail-title').innerText = $(id).getAttribute('data-title')
    $('detail-author').innerText = $(id).getAttribute('data-author')
    $('detail-url').href = $('detail-url').innerText = $(id).getAttribute('data-url')
    $('detail-note').innerText = $(id).getAttribute('data-note')
    $('detail').className = 'show'
}

function update_detail_view() {
    if (window.location.hash.length <= 1) hide_detail() // just # or empty
    else show_detail(window.location.hash.substr(1)) // book ID selected
}
window.addEventListener('hashchange', update_detail_view)
update_detail_view()

//})()