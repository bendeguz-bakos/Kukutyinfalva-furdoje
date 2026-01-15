const API_kulcs = "3a8a6d68084be40fa39d691c32a9d555"
async function idojaras() {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=47.53333&lon=21.63333&appid=${API_kulcs}&units=metric`

    const valalsz = await fetch(url)
    const idojarasJSON = await valalsz.json()

    console.log(idojarasJSON)
    return idojarasJSON
}

idojaras().then(adat => {

    const fok = adat.main.temp
    const idodiv = document.querySelector('#idojaras')

    if (fok < 0) {
        idodiv.innerHTML = `${fok} celsius fok van .Fagyaspont alatt ,semmifele keppen ne furodjenek`;
        idodiv.classList.add("bg-info");
        idodiv.classList.add("text-white");

    } else if (fok < 10) {
        idodiv.innerHTML = `${fok} celsius fok van .Elegge hideg igy csak a fedett medenceket ajanljuk esetleg a meleg vizeseket`;
        idodiv.classList.add("bg-primary");
        idodiv.classList.add("text-white");

    } else if (fok < 30) {
        idodiv.innerHTML = `${fok} celsius fok van .Tokeletes egy strandolashoz mind bent mind kint`
        idodiv.classList.add("bg-success")
        idodiv.classList.add("text-white")

    } else if (fok < 35) {
        idodiv.innerHTML = `${fok} celsius fok van .Meleg de nem veszes de hasznaljanak naptejet ! idoseknek es konnyen ajuloknak ne majanljuk a meleg vizes medenceket`
        idodiv.classList.add("bg-warning")
    } else if (fok > 35) {
        idodiv.innerHTML = `${fok} celsius fok van .Nagyon meleg csak a hideg vizes medenceket ajanljuk ,idosek es konnyen ajulok maradjanak inkabb othon`
        idodiv.classList.add("bg-danger")
        idodiv.classList.add("text-white")
    }
}
)
