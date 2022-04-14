function fetchData() {
    fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json")
        .then(res => {
            return res.json();
        })
        .catch(e => console.error(e))
        .then(data => {
            console.log(data);
            var table = document.getElementById("paintings")
            for (var paiting of data) {
                var tr = document.createElement('tr')
                console.log("🚀 ~ file: ex1.js ~ line 13 ~ fetchData ~ paiting", paiting)
                var thName = document.createElement('td')
                thName.appendChild(document.createTextNode(paiting.name))
                var thYear = document.createElement('td')
                thYear.appendChild(document.createTextNode(paiting.year))
                var thArtist = document.createElement('td')
                thArtist.appendChild(document.createTextNode(paiting.artist))
                tr.appendChild(thName)
                tr.appendChild(thYear)
                tr.appendChild(thArtist)
                table.appendChild(tr)
            }
        });
}

fetchData()