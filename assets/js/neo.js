


$(".subBtn").on("click", function () {
    var date = $(".dateInput").val().trim();

    if (date != "") {
        $(".outputArea").html("");
        $.ajax({
            url: "https://api.nasa.gov/neo/rest/v1/feed?start_date=" + date + "&end_date=" + date + "&api_key=12L8xvuLDTMsLDT4dKrb5xyk5H7b6HZfsJfVZImI",
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var data = response.near_earth_objects[date];
            console.log(data[1].estimated_diameter.feet.estimated_diameter_max.toFixed(2));
            console.log(data.length);

            for (var i = 0; i < data.length; i++) {
                var newDiv = $("<div>").attr("class", "added");
                var newH = $("<h5>").text(data[i].estimated_diameter.feet.estimated_diameter_max.toFixed(2) + " feet wide");
                newDiv.append(newH);
                $(".outputArea").append(newDiv);
            }
        })
    }

})
