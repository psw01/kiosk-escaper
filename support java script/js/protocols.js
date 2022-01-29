protocols = ["ms-calculator", "ssh", "ms-settings", "ms-search", "ms-help", "ms-getoffice", "ms-excel", "ms-settings-language", "ms-settings-lock", "ms-settings-wifi", "ms-stickers", "ms-browser-extension", "ms-access", "notes", "skype", "sms", "spotify", "telnet", "view-source", "wifi"]

function show_protocols() {
    for (i = 0; i < protocols.length; i++) {
        link = document.createElement('a')
        link.href = `${protocols[i]}://`
        link.innerHTML = `<button>${protocols[i]}</button>`
        document.getElementById('protocols_list').append(link)
    }
    document.getElementById('show_pt_bt').remove()
}