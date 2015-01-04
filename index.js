//(function() {

$  = document.getElementById.bind(document)
$$ = document.getElementsByClassName.bind(document)

// show the selected book's details in a modal
function hide_detail() {
    $('detail').style.opacity = 0
    $('detail').style.display = 'none'
}

function show_detail(id) {
    $('detail-cover').src = $(id).getAttribute('data-cover')
    $('detail-title').textContent = $(id).getAttribute('data-title')
    $('detail-author').textContent = $(id).getAttribute('data-author')
    $('detail-url').href = $('detail-url').textContent = $(id).getAttribute('data-url')
    $('detail-note').textContent = $(id).getAttribute('data-note')

    var owner = $(id).getAttribute('data-owner')
    $('detail-owner').textContent = owner
    $('detail-owner').href = owners[owner]

    $('detail').style.display = 'block'
    window.setTimeout(function(){ $('detail').style.opacity = 1 }, 50)
}

function update_detail_view() {
    if (window.location.hash.length <= 1) hide_detail() // just # or empty
    else show_detail('book-'+window.location.hash.substr(1)) // book ID selected
}
window.addEventListener('hashchange', update_detail_view)
update_detail_view()

//})()
