$(function () {
    $(".change-done").on("click", function (event) {
        var id = $(this).data("id");
        var newItemDone = $(this).data("newitemdone");

        var newDoneState = {
            done: newItemDone
        };

        // Send the PUT request.
        $.ajax("/api/bucketlist/" + id, {
            type: "PUT",
            data: newDoneState
        }).then(
            function () {
                console.log("Day seized", newItemDone);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBucketlist = {
            bucketItem: $("#bli").val().trim(),
            done: $("[bucketItem=done]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/bucketlist", {
            type: "POST",
            data: newBucketlist
        }).then(
            function () {
                console.log("Day has been seized!");
                location.reload();
            }
        );
    });

    $(".delete-cat").on("click", function (event) {
        var id = $(this).data("id");

        $.ajax("/api/cats/" + id);
        type: "DELETE"
    }).then(
        function () {
            console.log("deleted bucketlist item", id);
            location.reload();
        }
    );
});
