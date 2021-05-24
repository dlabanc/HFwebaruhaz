$(function () {

    kiir();
    $("#felvetel").click(felvesz);
    
    $("th").eq(0).click(rendezID);
    $("th").eq(1).click(rendezNev);
    $("th").eq(2).click(rendezAr);
    $("th").eq(3).click(rendezSzin);
    
});


var tombJSON = JSON.parse('[{"ID": "1","nev": "kávéfőző","ar": "5500","szin": "fekete"},{"ID": "2","nev": "babakocsi","ar": "12500","szin": "rózsaszín"},{"ID": "3","nev": "konzoljáték","ar": "99000","szin": "fehér"}]');


function kiir() {
    console.log(tombJSON);
    $("article").html("<table>");
    $("article table").html("<tr></tr>");

    for (var adat in tombJSON[0]) {
        $("article table tr").append("<th>" + adat + "</th>");
    }
    ;

    for (var i = 0; i < tombJSON.length; i++) {
        $("article table").append("<tr>");

        for (var item in tombJSON[i]) {
            $("article table tr").eq(i + 1).append("<td>" + tombJSON[i][item] + "</td>");
        }
        $("article table tr").eq(i + 1).append("<td><input type=\"button\" id=\"torol\" value=\"TÖRÖL\" name=\"torol\"></td>");

    }

}

function felvesz() {
    var ujtermek = {};
    ujtermek.ID = $("#id").val();
    ujtermek.nev = $("#nev").val();
    ujtermek.ar = $("#ar").val();
    ujtermek.szin = $("#szin").val();
    console.log(ujtermek);
    tombJSON.push(ujtermek);
    kiir();
}

function rendezNev() {
    tombJSON.sort(function (a, b) {
        return Number(a["nev"] > b["nev"]) - 0.5;
    });
    kiir();
}

function rendezID() {
    tombJSON.sort(function (a, b) {
        return a["ID"] - b["ID"];
    });
    kiir();
}

function rendezSzin() {
    tombJSON.sort(function (a, b) {
        return Number(a["szin"] > b["szin"]) - 0.5;
    });
    kiir();
}

function rendezAr() {
    tombJSON.sort(function (a, b) {
        return a["ar"] - b["ar"];
    });
    kiir();
}
