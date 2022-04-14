function displayKey() {
    const formData = new FormData(document.querySelector('form'));
    var table = document.getElementById('table')
    while(table.firstChild) table.removeChild(table.firstChild);
    var trH = document.createElement('tr')
    var thKey = document.createElement('th')
    var thValue = document.createElement('th')
    thKey.appendChild(document.createTextNode('Key'))
    thValue.appendChild(document.createTextNode('Value'))
    trH.appendChild(thKey)
    trH.appendChild(thValue)
    table.appendChild(trH)
    for (var pair of formData.entries()) {
        var tr = document.createElement('tr')
        var key = document.createElement('td')
        var value = document.createElement('td')
        key.appendChild(document.createTextNode(pair[0]))
        value.appendChild(document.createTextNode(pair[1]))
        tr.appendChild(key)
        tr.appendChild(value)
        table.appendChild(tr)
      }
}