var xpress_txt = [];
xpress_txt.zipcode_invalid = "Podany kod pocztowy jest nieprawidłowy.",
xpress_txt.localization = "Lokalizacja",
xpress_txt.courier_not_available = "Przykro nam, ale nasz ekspresowy kurier nie obsługuje tej okolicy. ",
xpress_txt.courier_not_available2 = "Twoje zamówienie zostanie dostarczone w standardowym czasie, a kuriera wybierzesz podczas składania zamówienia.",
xpress_txt.courier_not_available3 = "OK",
xpress_txt.ajax_error = "Wystąpił nieoczekiwany błąd. Proszę spróbować ponownie. ",
xpress_txt.geolocation_error = "Wystąpił błąd poczas sprawdzania kodu pocztowego. Proszę spróbować ponownie.",
xpress_txt.geolocation_error2 = "Nie można pobrać kodu pocztowego. ",
$.fn.textWidth = function(t, e) {
    return $.fn.textWidth.fakeEl || ($.fn.textWidth.fakeEl = $("<span>").hide().appendTo(document.body)),
    $.fn.textWidth.fakeEl.text(t || this.val() || this.text()).css("font", e || this.css("font")),
    $.fn.textWidth.fakeEl.width()
}
,
app_shop.fn.getParamsFormURL = function(t) {
    void 0 === t && (t = window.location.search);
    var e = t.split("?")[1];
    if (!e)
        return {};
    t = e.split("&");
    for (var i = {}, a = 0; a < t.length; ++a) {
        var r = t[a].split("=", 2);
        1 == r.length ? i[r[0]] = "" : i[r[0]] = decodeURIComponent(r[1].replace(/\+/g, " "))
    }
    return i
}
;
var filtering_callback = function() {}
  , filtering_callback_click = function() {}
  , xhr = ""
  , v66412_ajax_off = ""
  , v66412_suwaczek_on = ""
  , filter_active_ajax = function(t, e, i) {
    t ? 1 == e ? ($('a.filter_toggle[id != "filter_text_toggle"]').hide(),
    $('span.filter_loader[id != "filter_text_loader"]').show()) : ($('a.filter_toggle[id != "filter_text_toggle"]').show(),
    $('span.filter_loader[id != "filter_text_loader"]').hide()) : $("#" + i + "_toggle").is(":visible") ? ($("#" + i + "_toggle").hide(),
    $("#" + i + "_loader").show()) : ($("#" + i + "_toggle").show(),
    $("#" + i + "_loader").hide())
}
  , filter_response_ajax = function(t) {
    $("navigation>filtering>filter", t).each(function() {
        var t = $(this)
          , a = t.attr("id").replace("[", "").replace("]", "");
        $("#" + a).length && "filter_text" != a && (t.find(">item").each(function() {
            var t = $(this)
              , e = t.attr("quantity")
              , i = t.attr("value");
            e ? 0 < e ? ($("#" + a + "_val" + i + "_quantity").show(),
            $("#" + a + "_val" + i + "_quantity span.filter_quantity_value").html(e),
            $("#" + a + "_val" + i).removeAttr("disabled"),
            $("#" + a + "_" + i + "_box").removeClass("disabled")) : ($("#" + a + "_val" + i + "_quantity").show(),
            $("#" + a + "_val" + i + "_quantity span.filter_quantity_value").html(e),
            $("#" + a + "_val" + i).attr("disabled", "disabled"),
            $("#" + a + "_" + i + "_box").addClass("disabled")) : ($("#" + a + "_val" + i + "_quantity").hide(),
            $("#" + a + "_val" + i).removeAttr("disabled"),
            $("#" + a + "_" + i + "_box").removeClass("disabled"))
        }),
        $("div.filter_item.list_type").each(function() {
            $(this).find("li").not(".disabled").length ? $(this).find(".filter_header a").removeClass("active") : $(this).find(".filter_header a").addClass("active")
        }),
        filter_active_ajax(!0, !1))
    })
}
  , filter_prepare_ajaxfilter = function() {
    if (filter_fill_form(),
    "true" === v66412_ajax_off)
        return filter_submit(),
        !1;
    var t = $("#filter_form").serialize();
    xhr = filter_send_ajaxfilter(xhr, t),
    filter_active_ajax(!0, !0)
}
  , filter_send_ajaxfilter = function(t, e) {
    return (t = t) && 4 != t.readystate && (t.abort(),
    filter_active_ajax(!0, !1)),
    $.ajax({
        type: "GET",
        url: "/search.php?" + e + "&getProductXML=true&xmlType=filtering",
        dataType: "text",
        success: function(t) {
            filter_response_ajax(t)
        },
        error: function(t, e, i) {
            filter_active_ajax(!0, !1)
        }
    })
}
  , txt_66412_008_001 = "wybierz datę";
$.fn.setOneHeight = function() {
    var t = 0;
    $(this).each(function() {
        $(this).height() > t && (t = $(this).height())
    }),
    $(this).css("height", t)
}
;
var align_filter_gfx = function(t) {
    t ? $("#" + t + " li").setOneHeight() : $("#menu_filter div.filter_gfxonly").each(function() {
        $(this).is(":visible") && $(this).find("li").setOneHeight()
    })
};
function set_filter_cookie() {
    var t = new Array;
    $("#menu_filter a.filter_toggle.active").each(function() {
        t.push($(this).attr("href").substring(8))
    }),
    $.cookie("filter_hidden", "", {
        expires: 355
    }),
    $.cookie("filter_hidden", t, {
        expires: 355
    })
}
function get_filter_cookie() {
    var t = $.cookie("filter_hidden");
    if (t)
        for (var e = t.split(","), i = 0; i < e.length; i++)
            $('#menu_filter a.filter_toggle[href="#toggle_' + e[i] + '"]').addClass("active"),
            $("#" + e[i]).addClass("filter_hide").removeClass("filter_show").hide()
}
var show_options = function() {
    $("#menu_filter div.list_type, #menu_filter div.dual_type").each(function() {
        $(this).find("input").is(":checked") && ($('a.filter_submit[data-filter="' + $(this).attr("id") + '"]').addClass("active"),
        $("#filter_buttons").show("fast"))
    })
}
  , filter_showall = function(t) {
    t.hasClass("active") ? (t.removeClass("active"),
    t.html(filter_pokaz + " (" + t.parent().siblings("ul").find(".filterhidden").length + ")"),
    $("#" + t.attr("data-filter") + " li.filterhidden").removeClass("showhidden")) : (t.addClass("active"),
    t.html(filter_ukryj),
    $("#" + t.attr("data-filter") + " li.filterhidden").addClass("showhidden"))
}
  , filter_fill_form_action = function() {
    var t = app_shop.fn.getParamsFormURL($("#filter_form").attr("action"));
    for (var e in t) {
        var i = $('<input type="hidden">');
        i.attr("name", e),
        i.attr("value", t[e]),
        $("#filter_form").append(i)
    }
}
  , filter_fill_form = function() {
    $("#menu_filter div.filter_item.list_type").each(function() {
        var t = $(this).attr("id")
          , e = new Array;
        $("#" + t + "_content input[type=checkbox]:checked").each(function() {
            "disabled" != $(this).attr("disabled") && e.push($(this).val())
        }),
        $("#" + t + "_form").val(e)
    }),
    "1" == $.cookie("f_getPriceRange") && $("#menu_filter div.filter_range").each(function() {
        var t = $("#" + $(this).attr("data-filter") + "_range_from").val() + "-" + $("#" + $(this).attr("data-filter") + "_range_to").val();
        "-" != t && $("#" + $(this).attr("data-filter") + "_form").val(t)
    }),
    $("#menu_filter div.filter_item.dual_type input").each(function() {
        $(this).is(":checked") && "disabled" != $(this).attr("disabled") ? $("#" + $(this).attr("id") + "_form").val("y") : $("#" + $(this).attr("id") + "_form").val("")
    }),
    $("#filter_text_input").length && $("#filter_text_input").val() != $("#filter_text_input").attr("data-filter") && $("#filter_text_form").val($("#filter_text_input").val()),
    filtering_callback_click()
}
  , filter_submit = function() {
    filter_fill_form(),
    filter_fill_form_action(),
    $("#filter_form").submit()
}
  , mark_active = function(t) {
    $("#filter_dual #" + t).length ? obj_box = t + "_y_box" : obj_box = t.replace("_val", "_") + "_box",
    $("#" + t).is(":checked") ? $("#" + obj_box).addClass("enabled") : $("#" + obj_box).removeClass("enabled")
};
function menu_filter_init() {
    $("#menu_filter div.menu_filter_wrapper input[type=checkbox]").each(function() {
        mark_active($(this).attr("id"))
    }),
    $("#menu_filter div.menu_filter_wrapper input[type=checkbox]").change(function() {
        mark_active($(this).attr("id"))
    }),
    filter_fill_form(),
    $("#menu_filter input[type=text]").on("keyup", function(t) {
        13 == t.which && filter_submit()
    }),
    $('#menu_filter div.filter_item.list_type input[type="checkbox"]').click(function() {
        var t = String($(this).attr("id")).substring(0, String($(this).attr("id")).indexOf("_val"));
        console.log(t),
        $('a.filter_submit[data-filter="' + t + '"]').addClass("active"),
        $("#filter_buttons").show("fast");
        var e = new Array;
        $("#" + t + '_content input[type="checkbox"]').each(function() {
            $(this).is(":checked") && e.push($(this).val())
        }),
        $("#" + t + "_form").val(e),
        "filter_price_range_from" != $(this).attr("id") && "filter_price_range_to" != $(this).attr("id") && "filter_text_input" != $(this).attr("id") && "filter_date_datepicker" != $(this).attr("id") && "filter_date_option" != $(this).attr("data-filter") && filter_prepare_ajaxfilter()
    }),
    $("#menu_filter div.filter_item.dual_type input").click(function() {
        $(this).is(":checked") ? $("#" + $(this).attr("id") + "_form").val("y") : $("#" + $(this).attr("id") + "_form").val(""),
        $('a.filter_submit[data-filter="filter_dual"]').addClass("active"),
        $("#filter_buttons").show("fast"),
        filter_prepare_ajaxfilter()
    }),
    $("#filter_text_input").focus(function() {
        $(this).val() == $(this).attr("data-filter") && $(this).val("")
    }),
    $("#filter_text_submit").click(function() {
        filter_submit()
    }),
    $("#filter_text_input").keyup(function() {
        $("#filter_text_form").val($("#filter_text_input").val())
    }),
    $("#menu_filter a.filter_submit_range").click(function() {
        filter_fill_form(),
        $("#menu_filter div.filter_range").each(function() {
            var t = $("#" + $(this).attr("data-filter") + "_range_from").val() + "-" + $("#" + $(this).attr("data-filter") + "_range_to").val();
            "-" != t && $("#" + $(this).attr("data-filter") + "_form").val(t)
        }),
        $("#filter_form").submit()
    }),
    $("#filter_date").length && ($('#filter_date input[type="checkbox"]').click(function() {
        var t = $(this).prop("checked");
        $("#filter_date input").prop("checked", !1),
        t ? $(this).prop("checked", !0) : $(this).prop("checked", !1),
        "filter_date_calendar_picker" != $(this).attr("id") && ($("#filter_date_calendar_picker").val(""),
        $(this).parents("ul").find("span.filter_calendar_from").hide(),
        $("#filter_date_datepicker").val(txt_66412_008_001)),
        filter_prepare_ajaxfilter()
    }),
    $(".filter_datepicker").datepicker({
        onSelect: function(t, e) {
            $(this).parent().find("span.filter_calendar_from").show(),
            $("#" + $(this).attr("id").replace("_datepicker", "") + ' input[type="checkbox"]').prop("checked", !1),
            $(this).parent().find("input.filter_calendar").val($(this).val()),
            $(this).parent().find("input.filter_calendar").prop("checked", !0),
            $("#" + $(this).attr("id").replace("_datepicker", "_submit")).show("fast")
        },
        dateFormat: iaical_dateFormat,
        dayNamesMin: iaical_daysShort,
        monthNames: iaical_monthNames,
        nextText: iaical_monthNext,
        firstDay: iaical_firstDay,
        prevText: iaical_monthPrev
    }),
    $(".filter_datepicker").datepicker("option", "dateFormat", "yy-mm-dd"),
    datepicker_min_year = parseInt(datepicker_min.substring(0, 4)),
    datepicker_min_month = parseInt(datepicker_min.substring(5, 7)),
    datepicker_min_day = parseInt(datepicker_min.substring(8, 10)),
    datepicker_max_year = parseInt(datepicker_max.substring(0, 4)),
    datepicker_max_month = parseInt(datepicker_max.substring(5, 7)),
    datepicker_max_day = parseInt(datepicker_max.substring(8, 10)),
    $(".filter_datepicker").datepicker("option", "minDate"),
    $(".filter_datepicker").datepicker("option", "minDate", new Date(datepicker_min_year,datepicker_min_month - 1,datepicker_min_day)),
    $(".filter_datepicker").datepicker("option", "maxDate"),
    $(".filter_datepicker").datepicker("option", "maxDate", new Date(datepicker_max_year,datepicker_max_month - 1,datepicker_max_day)),
    $(".filter_datepicker").each(function() {
        $(this).val($(this).attr("data-filter"))
    })),
    $("#menu_filter").length && $("#ui-datepicker-div a").on("click", function() {
        filter_prepare_ajaxfilter()
    }),
    get_filter_cookie(),
    $("a.filter_submit").click(function() {
        filter_submit()
    }),
    $("a.show_all").click(function() {
        filter_showall($(this)),
        setLastVisible()
    }),
    $("#menu_filter a.filter_toggle").click(function() {
        return $(this).hasClass("active") ? ($(this).removeClass("active"),
        $("#" + $(this).attr("href").substring(8)).addClass("filter_hide").removeClass("filter_show").slideToggle("fast", function() {
            $("body").resize()
        }),
        set_filter_cookie(),
        $("#" + $(this).attr("id").replace("_toggle", "_content")).hasClass("filter_gfxonly") && align_filter_gfx($(this).attr("id").replace("_toggle", ""))) : ($(this).addClass("active"),
        $("#" + $(this).attr("href").substring(8)).addClass("filter_show").removeClass("filter_hide").slideToggle("fast", function() {
            $("body").resize()
        }),
        set_filter_cookie()),
        !1
    }),
    $("#menu_filter div.filter_item.list_type label").click(function() {
        $("#" + $(this).attr("for").replace("_val", "_") + "_box").hasClass("disabled") || ($("#" + $(this).attr("for")).prop("checked") ? $(this).removeClass("active") : $(this).addClass("active"))
    }),
    simple_tooltip("div.filter_gfxonly img", "filter_tooltip"),
    $("#filter_buttons a.filters_submit").click(function() {
        filter_submit()
    }),
    v66412_suwaczek_on && $.ui.slider && $("#slider-price").slider({
        range: !0,
        min: parseInt($("#min_price_start").val()),
        max: parseInt($("#max_price_start").val()),
        values: [parseInt($("#min_price_set").val() || $("#min_price_start").val()), parseInt($("#max_price_set").val() || $("#max_price_start").val())],
        slide: function(t, e) {
            $("#filter_price_range_from").val(e.values[0]),
            $("#filter_price_range_to").val(e.values[1])
        },
        stop: function(t, e) {
            $("#filter_price_range_from").val(e.values[0]),
            $("#filter_price_range_to").val(e.values[1])
        }
    }),
    $("#filter_price_range_content input").on("focus click change", function() {
        $.cookie("f_getPriceRange", "1")
    }),
    $("#filter_price_content input, #filter_price_content label").on("click", function() {
        $.cookie("f_getPriceRange", "0")
    }),
    app_shop.fn.xpressCouriersInit()
}
function checkBoxChecked() {
    0 < $("#menu_filter input[type=checkbox]:checked").length ? ($("#filters_submit span").first().addClass("active"),
    $("#filters_submit span").last().removeClass("active")) : ($("#filters_submit span").first().removeClass("active"),
    $("#filters_submit span").last().addClass("active"))
}
function setLastVisible() {
    $(".last-visible").removeClass("last-visible"),
    $("#menu_filter ul").each(function() {
        $(this).find($("li:visible")).last().addClass("last-visible")
    })
}
app_shop.fn.xpressCouriersInit = function() {
    $(".filter_content.xpress input").on("change", function() {
        var t = $(this);
        app_shop.vars.clickedXPRESS = t.attr("id"),
        app_shop.vars.clickedXPRESS = app_shop.vars.clickedXPRESS.split("_"),
        app_shop.vars.clickedXPRESS = app_shop.vars.clickedXPRESS[1],
        t.is(":checked") && "false" == t.parent().attr("data-localized") && $("body").dialog({
            width: 300,
            content: $("#xpress_toplayer").html(),
            wrapperClass: "xpress_zipcode_verification",
            fixed: !1
        })
    }),
    $("input#xpress_zipcode").on("input", function() {
        clearTimeout(app_shop.formControl.timeHandle),
        obj = $(this),
        app_shop.formControl.timeHandle = setTimeout(function() {
            app_shop.formControl.validate(obj)
        }, 500)
    }),
    $("#xpress_zipcode_submit").on("click", function() {
        var t = $(this).parent().siblings(".form-group").find("#xpress_zipcode")
          , e = t.data("region")
          , i = t.val();
        if (!t.val())
            return $("input#xpress_zipcode").addClass("error"),
            !1;
        var a = "client_zipcode=" + i + "&" + e;
        return $.ajax({
            url: "/ajax/client-new.php?validAjax=true",
            type: "post",
            data: a,
            dataType: "json",
            beforeSend: function() {
                $("html").addClass("load-content")
            },
            success: function(t) {
                if (0 < t.errno)
                    return Alertek.show_alert(xpress_txt.zipcode_invalid),
                    $("input#xpress_zipcode").addClass("error"),
                    $("html").removeClass("load-content"),
                    !1;
                $.ajax({
                    url: "/ajax/client-new.php?setClientSamedayLocation=1&zipcode=" + i,
                    type: "post",
                    dataType: "json",
                    success: function() {
                        $(location).attr("href");
                        var t = $("form#filter_form").serialize();
                        $.ajax({
                            url: "/search.php?" + t + "&getProductXML=true&xmlType=filtering",
                            dataType: "xml",
                            success: function(t) {
                                "true" == $(t).find(app_shop.vars.clickedXPRESS).attr("client_localized") && "true" == $(t).find(app_shop.vars.clickedXPRESS).attr("service_available_for_current_location") ? $("#filter_form").submit() : $("body").dialog({
                                    width: 300,
                                    content: $("#xpress_toplayer_error").html(),
                                    wrapperClass: "xpress_zipcode_verification",
                                    fixed: !1
                                }),
                                $("html").removeClass("load-content")
                            }
                        })
                    },
                    error: function() {
                        $("html").removeClass("load-content"),
                        Alertek.show_alert()
                    }
                })
            },
            error: function() {
                $("html").removeClass("load-content"),
                Alertek.show_alert(xpress_txt.geolocation_error)
            }
        }),
        !1
    }),
    $("#xpress_zipcode_geolocation").on("click", function() {
        return navigator.geolocation && navigator.geolocation.getCurrentPosition(function(t) {
            $(".xpress_zipcode_verification").addClass("load-content");
            var e = t.coords.latitude
              , i = t.coords.longitude
              , a = new google.maps.LatLng(e,i);
            (new google.maps.Geocoder).geocode({
                latLng: a
            }, function(t, e) {
                var i = t[0].formatted_address.match(/\d{2}-\d{3}/);
                i ? $("input#xpress_zipcode").val(i[0]) : Alertek.show_alert(xpress_txt.geolocation_error2),
                $(".xpress_zipcode_verification").removeClass("load-content")
            })
        }),
        !1
    }),
    $("#express_close_dialog").on("click", function() {
        return $("#dialog_close").click(),
        !1
    })
}
,
$(window).load(function() {
    align_filter_gfx(),
    $("#filter_price_list").length || $.cookie("f_getPriceRange", "0")
}),
$(".filter_search input").die().on("keyup", function() {
    var t = $(this)
      , e = t.val().toUpperCase()
      , i = t.parents(".filter_sub").find("ul")
      , a = i.find("li");
    i.find(".last-visible").removeClass("last-visible"),
    t.parents(".filter_sub").find(".show_all:not(.active)").click().hide(),
    "" == e && (setLastVisible(),
    t.parents(".filter_sub").find(".show_all.active").click().show()),
    a.each(function() {
        -1 < $(this).find("label").text().toUpperCase().indexOf(e) ? $(this).removeClass("hidden") : $(this).addClass("hidden")
    })
}),
$("filter_sub_header").on("click", function() {
    $(this).toggleClass("hidden")
}),
app_shop.run(function() {
    setLastVisible()
}, [2, 3, 4], ".filterhidden"),
app_shop.run(function() {
    checkBoxChecked(),
    $(".filter_checkbox").on("click", function() {
        checkBoxChecked()
    })
}, [1, 2], "#filters_submit");
