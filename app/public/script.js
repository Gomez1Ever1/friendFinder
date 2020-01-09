$(document).ready(function () {
    const newSet = function () {
        this.name = "";
        this.answerArray;
        this.getArray = function () {
            var newArray = [];
            $.each($("input[type=radio]:checked"), function () {
                newArray.push($(this).val());
                console.log(newArray)
            })
            return this.answerArray = newArray;
        };
    };
    $(document).on("click", "#submitBtn", function () {
        const newPerson = new newSet();
        newPerson.name = $("#nameBox").text() + $("#lastNameBox").text();
        newPerson.getArray();
        console.log(newPerson)
        $("input").attr("checked", false);
    });
});
