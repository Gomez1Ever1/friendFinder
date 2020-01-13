$(document).ready(function () {
    var firstName = $("#nameBox").val();
    var lastName = $("#lastNameBox").val();
    var names = [firstName, lastName];
    const newSet = function () {
        this.name = names.join(" ");
        this.image = $("#imgBox").val();
        this.scores;
    };
    $(document).on("click", "#submitBtn", function () {
        const newPerson = new newSet();
        var newArray = [];
        $.each($("input[type=radio]:checked"), function () {
            newArray.push($(this).val());
        })
        newPerson.scores = newArray;
        $("input").prop("checked", false);
        $(".textBox").val("");
        $.post("/api/friend", newPerson).done(function (response) {
            console.log(response);
            $("#modalBody")
                .append("<img class='img-fluid' src=" + response.image + " alt='matchImg'><br><h2 style='text-font:25px;'>" + response.name + "</h2>");
        });
    });
});
