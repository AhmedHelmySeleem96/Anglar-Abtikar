
// ahmed 3/11/2022
window.urlDrive = "https://script.google.com/macros/s/AKfycbwi1PvjQzdOsP3KvFtCDI-I-A6W-0Qk-9QkjSV2hvt9JlZA9iCbau5g80Iqs6Wa3Rnp/exec";

//window.DivSpinner = document.getElementById("DivSpinner")


//sendToServer
//getPageInfo
//console.log(DivSpinner)

window.bank = {};

window.mainTable = {};

window.dataInfo = {};

window.rowInc = [];

window.newRowInc = (tableBody) => {
    window.rowInc.push({ rowCount: 1, rowIncArr: [1], tableBody: tableBody });
}
window.newRow = (tableBody) => {
    window.rowInc.push({ rowCount: 0, rowIncArr: [], tableBody: tableBody });
}
window.toNum = (num) => {
    value = Number(num);
    if (isNaN(num))
        return 0;
    return value;
}
window.shortDate = (date) => {
    if (date.length > 10) {
        return date.substring(0, 10);
    } else {
        return date;
    }
}


window.getPageInfo = (url, prams = null, callbackFun) => {

    var obj = {
        type: "Get",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: url,
        success: function (res) {

            console.log(res);
            if (res.IsSuccess) {

                window.dataInfo = res;
                callbackFun(res);
            }
            else {
                window.error(res.Message);
            }
            if (res.IsRedirect) {
                window.redirect(res.URL);
            }
            //alert("wait");

        }, error: function (resError) {
            /*window.DivSpinner.style.display = "none"*/

            window.dataInfo = resError;
            callbackFun(resError);
        }
    };

    if (prams != null) {
        obj.data = prams;
    }
    $.ajax(obj);
};

window.onFileSelected = (event) => {

    let id = event.target.id;

    var selectedFile = event.target.files[0];

    var reader = new FileReader();

    var imgtag = document.getElementById(id + "Img");

    imgtag.title = selectedFile.name;

    reader.onload = function (event) {
        imgtag.src = event.target.result;
    };

    reader.readAsDataURL(selectedFile);

    var data = new FormData();

    var files = $("#" + id).get(0).files;

    data.append("File", files[0]);

    data.append("Id", $("#OrphanId").val());

    data.append("ImageFor", id);

    //$.ajax({

    //    url: "/Orphan/Orphans/Attachment",
    //    data: data,
    //    type: 'POST',
    //    processData: false,
    //    contentType: false,
    //    success: function (value) {
    //     //   window.success("success")
    //    }
    //});
}

window.fillInputs = () => {
    $("input")
        .each(function () {
            $(this).val("");
        });
    $("select")
        .each(function () {
            $(this).val(0);
        });
}

window.ajaxPostFormData = (url, model, callbackFunction, selector = $("#saveBtn")) => {
    model.BranchId = localStorage.getItem('branchid');

    function buildFormData(formData, data, parentKey) {
        if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
            Object.keys(data).forEach(key => {
                buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
            });
        } else {
            const value = data == null ? '' : data;

            formData.append(parentKey, value);
        }
    }
    function jsonToFormData(data) {
        const formData = new FormData();

        buildFormData(formData, data);

        return formData;
    }

    var formData = jsonToFormData(model);


    //var selectorTxt = "";
    //if (selector != null && selector != undefined) {
    //    selectorTxt = selector.text();
    //    selector.text("");
    //    $(":submit").prop('disabled', true);
    //    $("button").prop('disabled', true);
    //    $("a").prop('disabled', true);

    //    selector.append(`<span class="spinner-border spinner-border-sm justify-self-center" role="status" aria-hidden="true"></span>...${L("Loading")}`);
    //}

    if (selector != null)
        $(selector).prop("disabled", true);

    $.ajax({
        type: "POST",
        url: url,
        processData: false,
        contentType: false,
        data: formData,
        beforeSend: console.log(model),
        success: function (value) {
            if (value.IsSuccess) {
                if (callbackFunction != undefined && callbackFunction != null) {
                    callbackFunction(value);
                }
                if (value.Message != "noMsg")
                    window.success(value.Message);

            }
            else {
                window.error(value.Message);
            }

            if (selector != null && selector != undefined) {
                selector.text(selectorTxt);
                selector.children('span').remove();
                $(":submit").prop('disabled', false);
                $("button").prop('disabled', false);
                $("a").prop('disabled', false);
            }
        },
        error: function (request, status, error) {
            alert(request.responseText);
        }
    });

    if (selector != null)
        $(selector).prop("disabled", false);
}


window.fillMainTable = (tableSel, dataInfo, columns, hasHuttons = true, haseSearch = true) => {

    var buttons = (hasHuttons) ? ['copy', 'excel', 'print'] : [];
    var lang = (haseSearch) ? {
        "search": " بحث : ",
        "paginate":
        {
            "first": "الاول",
            "last": "الاخير",
            "next": "التالي",
            "previous": "السابق"
        },
        "emptyTable": "لايوجد بيانات لعرضها",
        "info": "عرض _START_ الى _END_ من _TOTAL_ صف",
        "infoEmpty": "عرض 0 الى 0 من 0 صف",
        "lengthMenu": "عرض _MENU_ صف",
        "bDestroy": true
    } : {};

    var table = $(tableSel).DataTable({
        destroy: true,
        data: dataInfo,
        dom: 'Bfrtip',

        buttons: buttons,

        columns: columns,

        "language": lang
    });
    $('a.toggle-vis').on('click', function (e) {
        e.preventDefault();
        var column = table.column($(this).attr('data-column'));
        column.visible(!column.visible());
    });
    $(".buttons-print,.buttons-html5").addClass("btn btn-info")
    return table;
}



window.warning = (massage, autoClose = 'cancelAction|3000') => {

    $.alert({
        title: 'انتبه!',
        content: '<p class="text-center">' + massage + ' ! </p>',
        type: 'red',
        typeAnimated: true,
        rtl: true,
        autoClose: autoClose,
        closeIcon: true,
        closeIconClass: 'fa fa-close',
        buttons: {
            cancelAction: {
                text: 'اغلاق',
                btnClass: 'btn-red',
                action: function () {
                }
            },
            //close: function () {
            //}
        }
    });

}


window.success = (massage, autoClose = 'cancelAction|3000') => {

    $.alert({
        title: 'Done!',
        content: '<p class="text-center">' + massage + ' ! </p>',
        type: 'green',
        typeAnimated: true,
        rtl: true,
        autoClose: autoClose,
        closeIcon: true,
        closeIconClass: 'fa fa-close',
        buttons: {
            cancelAction: {
                text: 'اغلاق',
                btnClass: 'btn-success',
                action: function () {
                }
            },
            //close: function () {
            //}
        }
    });

}

window.error = (massage, autoClose = 'cancelAction|3000') => {

    $.alert({
        title: 'انتبه!',
        content: '<p class="text-center">' + massage + ' ! </p>',
        type: 'red',
        typeAnimated: true,
        rtl: true,
        autoClose: autoClose,
        closeIcon: true,
        closeIconClass: 'fa fa-close',
        buttons: {
            cancelAction: {
                text: 'اغلاق',
                btnClass: 'btn-red',
                action: function () {
                }
            },
            //close: function () {
            //}
        }
    });

}

//dummy.com/?technology=jquery&blog=jquerybyexample
//var tech = getUrlParameter('technology');
window.getUrlParameter = (sParam) => {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

window.reload = () => {
    setTimeout(function () { location.reload() }, 1500);
}

window.ajaxPostModelCallback = (url, model, callbackFun) => {
    $.ajax({
        type: "POST",
        url: url,
        data: { model },
        success: function (value) {
            if (callbackFun != undefined && callbackFun != null) {
                callbackFun(value);
            }
        }
    });
}
window.ajaxPostCallback = (url, callbackFun) => {
    $.ajax({
        type: "POST",
        url: url,
        success: function (value) {
            if (callbackFun != undefined && callbackFun != null) {
                callbackFun(value);
            }
        }
    });
}
window.openReportWindow = (html) => {
    var win = window.open("", "_blank",
        "resizable = no, toolbar= no, scrollbars = no, top = 20,status = no, directories = no, menubar = no,  width = 900 , height = 1200");

    win.document.write(html)
}

window.sendToServer = (url, model, callbackFun, selector = $("#saveBtn")) => {
    if (selector != null)
        $(selector).prop("disabled", true);

    /*window.DivSpinner.style.display = "block"*/

    //console.log(model)
    console.log(url)

    $.ajax({
        type: "POST",
        url: url,
        data: { model },
        success: function (value) {


            /*window.DivSpinner.style.display = "none"*/


            console.log("sendToServer =>", value);

            if (value.IsSuccess) {

                if (callbackFun != undefined && callbackFun != null) {
                    callbackFun(value);
                }
                if (value.Message != "noMsg")
                    window.success(value.Message);
                if (selector != null)
                    $(selector).prop("disabled", false);
            }
            else {
                window.error(value.Message);
                if (selector != null)
                    $(selector).prop("disabled", false);
            }
            if (value.IsRedirect) {
                window.redirect(value.URL);
            }
            if (selector != null)
                $(selector).prop("disabled", false);
        },
        error: function (request, status, error) {
          /*  window.DivSpinner.style.display = "none"*/

        }
    }


    );
    if (selector != null)
        $(selector).prop("disabled", false);
}



window.redirect = (url = "/", timespan = 1500) => {
    setTimeout(function () {
        location.href = url;
    }, timespan)
}

window.ajaxPost = (url, model,) => {
    $(":submit").prop('disabled', true);
    $("button").prop('disabled', true);
    $("a").prop('disabled', true);
    //$("input").prop('disabled', true);
    $("select").prop('disabled', true);

    $.ajax({
        type: "POST",
        url: url,
        data: { model },
        success: function (value) {

            window.success("تم بنجاح");
        }
    });

}


window.confirmMg = (title = 'تأكيد!', content = 'هل انت متاكد !', confirm = () => { },
    confirmBtnText) => {

    $.confirm({
        title: title,
        content: content,


        buttons: {
            formSubmit: {
                //text: confirmBtnText,
                text: "تاكيد",
                btnClass: 'btn-blue',
                action: confirm

            },
            cancel: {
                text: 'اللغاء',
                btnClass: 'btn-red',
                action: () => { }
            }
        }
    });

}



window.setDate = (selector) => {
    $(selector).datepicker({
        showOn: "button",
        buttonImage: "../../../images/common/calendar.png",
        buttonImageOnly: true,
        buttonText: "اختر التاريخ",
        changeMonth: true,
        changeYear: true
    });
}


window.fillSelectMultiName = (selector, dataInfo, value, name, firstOption = null, IsSelectTo = false) => {
    $(selector).empty();

    if (firstOption != null && firstOption != undefined) {
        $(selector).append(firstOption)
    }
    for (var i = 0; i < dataInfo.length; i++) {
        let names = ""
        for (var j = 0; j < name.length; j++) {
            if (j == 0)
                names = dataInfo[i][name[j]]
            if (j > 0) {
                if (dataInfo[i][name[j]] != null && dataInfo[i][name[j]] != "")
                    names = names + " - " + dataInfo[i][name[j]]

            }
        }

        //$(selector).append(' <option value="' + dataInfo[i].id + '">' + dataInfo[i].nameAr + '</option>')
        $(selector).append(' <option value="' + dataInfo[i][value] + '">' + names + '</option>')
    }
    if (IsSelectTo) {
        window.setSelectTwo(selector)
    }
}


window.getItemUniteBalance = (storeselector = null, stockSlector = null, storeId, itemId, callbackFun = null, async = true) => {

    let response

    if (storeId == null || storeId == undefined || storeId == 0) {
        window.warning("  خطا في التعرف علي المخزن !")
        return;
    }
    if (itemId == null || itemId == undefined || itemId == 0) {
        window.warning("  خطا في التعرف علي المنتج !")
        return;
    }

   // $(storeselector).prop('disabled', true);

    let model = {
        StoreId: storeId,
        ItemUnitId: itemId
    }
    $.ajax({
        type: "POST",
        url: "/Storage/Storage/GetItemBalanceFromStorage/",
        data: model,
        dataType: "json",
        async: async,
        success: function (value) {
            response = value.Obj

            if (value.IsSuccess) {
                $(stockSlector).val(response);
                if (callbackFun != null) {
                    if (response != null) { callbackFun() };
                }
                
            }
            else {
                window.error(value.Message);
            }
        }
    });

    //return response
}


window.fillSelects = (selector, dataInfo, value, name, firstOption = null, IsSelectTo = false, removeOld = true) => {

    if (removeOld)
        $(selector).empty();
    if (firstOption != null && firstOption != undefined) {
        $(selector).append(firstOption)
    }
    if (dataInfo != null) {
        for (var i = 0; i < dataInfo.length; i++) {
            //$(selector).append(' <option value="' + dataInfo[i].id + '">' + dataInfo[i].nameAr + '</option>')
            $(selector).append(' <option value="' + dataInfo[i][value] + '">' + dataInfo[i][name] + '</option>')
        }
    }
    if (IsSelectTo) {
        window.setSelectTwo(selector)
    }
}


window.setSelectTwo = (selector) => {
    $(selector).select2({
        theme: "classic"
    });
}
window.defaultGuide = '00000000-0000-0000-0000-000000000000';
window.setdefaultOptions = (defaultOptions) => {

    if (defaultOptions.StoreGuide != undefined && defaultOptions.StoreGuide != defaultGuide)
        $("#StoreGuide").val(defaultOptions.StoreGuide).change();
    if (defaultOptions.CustomerGuide != undefined && defaultOptions.CustomerGuide != defaultGuide)
        $("#CustomerGuide").val(defaultOptions.CustomerGuide).change();
    if (defaultOptions.SupplierGuide != undefined && defaultOptions.SupplierGuide != defaultGuide)
        $("#SupplierGuide").val(defaultOptions.SupplierGuide).change();
    if (defaultOptions.BankGuide != undefined && defaultOptions.BankGuide != defaultGuide)
        $("#BankGuide").val(defaultOptions.BankGuide).change();
    if (defaultOptions.CostCenterGuide != undefined && defaultOptions.CostCenterGuide != defaultGuide)
        $("#CostCenterGuide").val(defaultOptions.CostCenterGuide).change();
    if (defaultOptions.TreasuryId != undefined && defaultOptions.TreasuryId != 0)
        $("#TreasuryId").val(defaultOptions.TreasuryId).change();
    if (defaultOptions.IsPermenent != undefined)
        $("#IsPermenent").val(defaultOptions.IsPermenent).change();
    //if (defaultOptions.PaymentType != undefined && defaultOptions.PaymentType != 0) {
    //    $('input:radio[name=paymentType]').val(defaultOptions.PaymentType);
    //    $("#PaymentType").val(defaultOptions.PaymentType).change();
    //}




    //  شاشة المخزن
    if (defaultOptions.FromStoreId != undefined && defaultOptions.FromStoreId != 0)
        $("#FromStoreId").val(defaultOptions.FromStoreId).change();
    if (defaultOptions.ToStoreId != undefined && defaultOptions.ToStoreId != 0)
        $("#ToStoreId").val(defaultOptions.ToStoreId).change();
    if (defaultOptions.EmployeeId != undefined && defaultOptions.EmployeeId != 0)
        $("#EmployeeId").val(defaultOptions.EmployeeId).change();
    //  شاشة الاصناف
    if (defaultOptions.GroupGuid != undefined && defaultOptions.GroupGuid != defaultGuide)
        $("#GroupGuid").val(defaultOptions.GroupGuid).change();
}

$(function () {
    /*window.DivSpinner.style.display = "none"*/

    $("input").attr('autocomplete', 'off');
    $(".sidebarCollapse").click();
    $(".modal").on('hide.bs.modal', function () {
        $(".modal-backdrop").remove();

    })
    $(".modal").on('shown.bs.modal', function () {
        let html = `<div class="modal-backdrop fade show"></div>`;
        $(".modal-backdrop").remove();
        $("#HereModel").append(html);
    });


    //$('#export-dt').dataTable({
    //    searching: false
    //});
    //$('#export-dt').DataTable({
    //    dom: '<"row"<"col-md-6"B><"col-md-6"f> ><""rt> <"col-md-12"<"row"<"col-md-5"i><"col-md-7"p>>>',
    //    buttons: {
    //        buttons: [
    //            { extend: 'copy', className: 'btn btn-primary' },
    //            { extend: 'csv', className: 'btn btn-primary' },
    //            { extend: 'excel', className: 'btn btn-primary' },
    //            { extend: 'pdf', className: 'btn btn-primary' },
    //            { extend: 'print', className: 'btn btn-primary' }
    //        ]
    //    },
    //    "language": {
    //        "paginate": {
    //            "previous": "<i class='las la-angle-left'></i>",
    //            "next": "<i class='las la-angle-right'></i>"
    //        }
    //    },
    //    "lengthMenu": [7, 10, 20, 50],
    //    "pageLength": 7,

    //    // new
    //    //"paging": false,
    //    //"lengthChange": false,
    //    //"searching": false,
    //    //"ordering": true,
    //    //"info": true,
    //    //"autoWidth": false,
    //    //"responsive": true,

    //    //"scrollY": "200px",
    //    //"paginate": true,
    //    //"pagingType": "full_numbers",
    //    stateSave: true,
    //    "bDestroy": true
    //});
    //$("#export-dt").dataTable().fnDestroy();
    // $(".export-dt").dataTable().fnDestroy();
    // $("#mainTable").dataTable().fnDestroy();
    //$('#export-dt').dataTable({
    //    stateSave: true,
    //    "bDestroy": true
    //});

    //====================

    $(document).on("click", "#viewBtn", function () {
        $("#saveBtn").hide(300)
        $(".createDiv").hide(300)
        $(this).hide(300)

        $(".tableDiv").show(600)
        $("#backToCareat").show(300)
        window.fillInputs()
    });

    $(document).on("click", "#backToCareat", function () {
        $(".tableDiv").hide(300)
        $(this).hide(300)

        $(".BtnDelete").hide()

        $(".createDiv").show(600)
        $("#viewBtn").show(300)
        $("#saveBtn").show(300)
    });

    $(document).on("click", "#showToEdit,.editBtnInTable", function () {
        $(".tableDiv").hide(300);
        $("#backToCareat").hide(300);

        $(".createDiv").show(600)
        $("#viewBtn").show(300)
        $("#DeleteBTN").show(300)
        $(".BtnDelete").show(300)
        $("#saveBtn").show(300)

    });
    $(document).on("click", "#reload", function () {
        setTimeout(function () { location.reload() }, 1000);
    });


    // التاريخ
    //$('input[name="datetimes"]').daterangepicker({
    //    singleDatePicker: true,
    //    //timePicker: true,
    //    "autoApply": true,
    //    showDropdowns: true,
    //    minYear: 1901,
    //    //maxYear: parseInt(moment().format('YYYY'), 10),
    //    locale: {
    //        format: 'YYYY-MM-DD'
    //    }
    //}, function (start, end, label) {
    //    var years = moment().diff(start, 'years');
    //});


    //$('#export-dt').DataTable({
    //    dom: '<"row"<"col-md-6"B><"col-md-6"f> ><""rt> <"col-md-12"<"row"<"col-md-5"i><"col-md-7"p>>>',
    //    buttons: {
    //        buttons: [
    //            { extend: 'copy', className: 'btn btn-primary' },
    //            { extend: 'csv', className: 'btn btn-primary' },
    //            { extend: 'excel', className: 'btn btn-primary' },
    //            { extend: 'pdf', className: 'btn btn-primary' },
    //            { extend: 'print', className: 'btn btn-primary' }
    //        ]
    //    },
    //    "language": {
    //        "paginate": {
    //            "previous": "<i class='las la-angle-left'></i>",
    //            "next": "<i class='las la-angle-right'></i>"
    //        }
    //    },
    //    "lengthMenu": [7, 10, 20, 50],
    //    "pageLength": 7
    //});

    String.prototype.toEnDigit = function () {
        return this.replace(/[\u06F0-\u06F9]+/g, function (digit) {
            var ret = '';
            for (var i = 0, len = digit.length; i < len; i++) {
                ret += String.fromCharCode(digit.charCodeAt(i) - 1728);
            }

            return ret;
        });
    };


    jQuery('input[type="number"]').on('input', function () {
        var value = jQuery(this).val();
        console.log(value.toEnDigit());
    });
    //====================================================================

    // $(document).on("change", "[type='number']", function () {
    //// $("[type='number']").keydown(function (e) {
    //     if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190, 111]) !== -1 ||
    //         (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
    //         (e.keyCode === 86 && (e.ctrlKey === true || e.metaKey === true)) ||
    //         (e.keyCode >= 35 && e.keyCode <= 40)) {
    //         return;
    //     }
    //     if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
    //         e.preventDefault();
    //     }
    // });

})

//$(document).ready(function () {
//    $('#basic-dt').DataTable({
//        "language": {
//            "paginate": {
//                "previous": "<i class='las la-angle-left'></i>",
//                "next": "<i class='las la-angle-right'></i>"
//            }
//        },
//        "lengthMenu": [5, 10, 15, 20],
//        "pageLength": 5
//    });
//    $('#dropdown-dt').DataTable({
//        "language": {
//            "paginate": {
//                "previous": "<i class='las la-angle-left'></i>",
//                "next": "<i class='las la-angle-right'></i>"
//            }
//        },
//        "lengthMenu": [5, 10, 15, 20],
//        "pageLength": 5
//    });
//    $('#last-page-dt').DataTable({
//        "pagingType": "full_numbers",
//        "language": {
//            "paginate": {
//                "first": "<i class='las la-angle-double-left'></i>",
//                "previous": "<i class='las la-angle-left'></i>",
//                "next": "<i class='las la-angle-right'></i>",
//                "last": "<i class='las la-angle-double-right'></i>"
//            }
//        },
//        "lengthMenu": [3, 6, 9, 12],
//        "pageLength": 3
//    });
//    $.fn.dataTable.ext.search.push(
//        function (settings, data, dataIndex) {
//            var min = parseInt($('#min').val(), 10);
//            var max = parseInt($('#max').val(), 10);
//            var age = parseFloat(data[3]) || 0; // use data for the age column
//            if ((isNaN(min) && isNaN(max)) ||
//                (isNaN(min) && age <= max) ||
//                (min <= age && isNaN(max)) ||
//                (min <= age && age <= max)) {
//                return true;
//            }
//            return false;
//        }
//    );
//    var table = $('#range-dt').DataTable({
//        "language": {
//            "paginate": {
//                "previous": "<i class='las la-angle-left'></i>",
//                "next": "<i class='las la-angle-right'></i>"
//            }
//        },
//        "lengthMenu": [5, 10, 15, 20],
//        "pageLength": 5
//    });
//    $('#min, #max').keyup(function () { table.draw(); });
//    $('#export-dt').DataTable({
//        dom: '<"row"<"col-md-6"B><"col-md-6"f> ><""rt> <"col-md-12"<"row"<"col-md-5"i><"col-md-7"p>>>',
//        buttons: {
//            buttons: [
//                { extend: 'copy', className: 'btn btn-primary' },
//                { extend: 'csv', className: 'btn btn-primary' },
//                { extend: 'excel', className: 'btn btn-primary' },
//                { extend: 'pdf', className: 'btn btn-primary' },
//                { extend: 'print', className: 'btn btn-primary' }
//            ]
//        },
//        "language": {
//            "paginate": {
//                "previous": "<i class='las la-angle-left'></i>",
//                "next": "<i class='las la-angle-right'></i>"
//            }
//        },
//        "lengthMenu": [7, 10, 20, 50],
//        "pageLength": 7,

//        // new
//        "paging": false,
//        "lengthChange": false,
//        "searching": false,
//        "ordering": true,
//        "info": true,
//        "autoWidth": false,
//        "responsive": true,

//        //"scrollY": "200px",
//        //"paginate": true,
//        "pagingType": "full_numbers",
//        "stateSave" : true,
//        "bDestroy": false
//    });
//    // Add text input to the footer
//    $('#single-column-search tfoot th').each(function () {
//        var title = $(this).text();
//        $(this).html('<input type="text" class="form-control" placeholder="Search ' + title + '" />');
//    });
//    // Generate Datatable
//    var table = $('#single-column-search').DataTable({
//        "language": {
//            "paginate": {
//                "previous": "<i class='las la-angle-left'></i>",
//                "next": "<i class='las la-angle-right'></i>"
//            }
//        },
//        "lengthMenu": [5, 10, 15, 20],
//        "pageLength": 5
//    });
//    // Search
//    table.columns().every(function () {
//        var that = this;
//        $('input', this.footer()).on('keyup change', function () {
//            if (that.search() !== this.value) {
//                that
//                    .search(this.value)
//                    .draw();
//            }
//        });
//    });
//    var table = $('#toggle-column').DataTable({
//        "language": {
//            "paginate": {
//                "previous": "<i class='las la-angle-left'></i>",
//                "next": "<i class='las la-angle-right'></i>"
//            }
//        },
//        "lengthMenu": [5, 10, 15, 20],
//        "pageLength": 5
//    });
//    $('a.toggle-btn').on('click', function (e) {
//        e.preventDefault();
//        // Get the column API object
//        var column = table.column($(this).attr('data-column'));
//        // Toggle the visibility
//        column.visible(!column.visible());
//        $(this).toggleClass("toggle-clicked");
//    });
//});

