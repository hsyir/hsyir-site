import SupportList from "./SupportList.js";

const supportList = new SupportList();

window.addToSupportList = function (productVarietyId) {
    return supportList.addItem(productVarietyId)
};

document.body.addEventListener("supportList-update", function () {
    if (supportList.count() > 0) {
        $("#supportList-indicator").addClass("text-danger");
        $("#supportList-children-count").html(supportList.count()).show();
    }
    else {
        $("#supportList-indicator").addClass("text-secondary");
        $("#supportList-children-count").html(supportList.count()).hide();
    }
});

$(document).ready(function () {

    $(".inline-add-to-supportList").click(function (e) {
        alert("asd");
        if ($(this).hasClass("disabled")) {

            $(this).notify("تا کامل شدن فرایند دستور قبل صبر کنید",{ position:"bottom center",className:"error"  });
            e.preventDefault();
            return;
        }
        let btn = this;
        $(".inline-add-to-supportList").addClass("disabled");
        $(this).find(".spinner").removeClass("d-none");
        $(this).find("i").addClass("d-none");
        supportList.addItem($(this).data('variety_id')).then(function () {
            $(".inline-add-to-supportList").removeClass("disabled");
            $(btn).find(".spinner").addClass("d-none");
            $(btn).find("i").removeClass("d-none");
            $(btn).notify("به لیست شما افزوده شد",{ position:"bottom center",className:"success"  });
        })
            .catch(function () {

                $(".inline-add-to-supportList").removeClass("disabled");
                $(btn).find(".spinner").addClass("d-none");
                $(btn).find("i").removeClass("d-none");
            })
    })
})
