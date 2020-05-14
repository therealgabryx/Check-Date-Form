function checkDate() {
    let trn = false;
    if (dateForm.date.value != "") {
        const date = new Date(dateForm.date.value);
        if (date.getDay() == 0 || date.getDay() == 6) {
            alert("I giorni Sabato e Domenica non sono validi!");
        } else {
            alert("Data scelta: " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear());
            rtn = true;
        }
    }
    else {
        alert("Inserisci una data!");
    }
    return rtn;
}