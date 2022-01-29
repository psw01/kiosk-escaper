function open_link_tab(url = 'none') {
    if (url != 'none') {
        window.open(url, '_blank');
        return
    }
    url = update()
    window.open(url, '_blank');
}

function open_link_window() {
    url = update()
    window.open(url, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
}

function open_link_here() {
    url = update()
    window.location.href = url;
}

function update() {
    return document.getElementById('url_to_open').value
}