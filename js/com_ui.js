/*pc_menu*/
const menubt1 = document.querySelector('.btn_mn1');
const menubt2 = document.querySelector('.btn_mn2');
const menubt3 = document.querySelector('.btn_mn3');
const monitoring = document.querySelector('.monitor_body');
const board = document.querySelector('.board_body');
const indicat = document.querySelector('.indicator_body');

/*dw add*/
const weaterbt1 = document.querySelector('.btn_weather1');
const weaterbt2 = document.querySelector('.btn_weather2');
/*dw add end*/

function btm1() {
    menubt1.classList.add('on');
    menubt2.classList.remove('on');
    menubt3.classList.remove('on');
    monitoring.style.display = 'block';
    board.style.display = 'none';
    indicat.style.display = 'none';
}
function btm2() {
    menubt1.classList.remove('on');
    menubt2.classList.add('on');
    menubt3.classList.remove('on');
    monitoring.style.display = 'none';
    board.style.display = 'block';
    indicat.style.display = 'none';
}
function btm3() {
    menubt1.classList.remove('on');
    menubt2.classList.remove('on');
    menubt3.classList.add('on');
    monitoring.style.display = 'none';
    board.style.display = 'none';
    indicat.style.display = 'block';
}

/*dw add*/
function btnWeater1() {
    weaterbt1.classList.add('on');
    weaterbt2.classList.remove('on');
}

function btnWeater2() {
    weaterbt1.classList.remove('on');
    weaterbt2.classList.add('on');
}
/*dw add end*/

// 22-07 신규
// b twin tablist
function tabList(selector, contents) {
    let $selector = $(selector);
    let $contents = $(contents);

    $selector.on('click focusin', function() {
        let objectThis = $(this);
        let tabName = objectThis.attr('data-tab');

        $selector.attr('aria-selected', false);
        objectThis.attr('aria-selected', true);

        $selector.removeClass('on');
        objectThis.addClass('on');
        $contents.hide();

        $('.custom_tabpanel' + '.' + tabName).show()
    });
}
function onOffClass(selector){
    let $selector = $(selector);

    $selector.on('click', function(){
        $(this).toggleClass('on');
    })
    $('.vms_minimap .x24').on('click', function(){
        $(this).parents('.vms_minimap').hide()
    })
}
$(function(){
    tabList('.b_twin .indi_tab .tab', '.b_twin .custom_tabpanel');
    onOffClass('.twin_footer_btn button')
    $('.map_anchor_btn > button').on('mouseenter', function(){
        $(this).addClass('on')
    })
    $('.map_anchor_btn > button').on('mouseout', function(){
        $(this).removeClass('on')
    })
})
// 22-07 신규 끝

/*cctv*/
$(function () {
    $('.monit').click(function () {
        $('.monit_pop').css('display', 'block');
    });

    $('.mon_pop_top .pop_x').click(function () {
        $('.monitor_pop').hide();
    });
});


/*board_title*/
$(function () {
    $('.arr_top').click(function () {
        $(this).parents('.board_title').toggleClass('up');
    });
});


/*indicator*/
$(function () {
    $('.indi_top').click(function () {
        $(this).children('.arr_up').toggleClass('down');
        $(this).siblings('.indi_conts').toggleClass('del');
        $(this).siblings('.indi_scroll').children('.indi_conts').toggleClass('del');
    });

    $('.indi_top_time').click(function () {
        $(this).parent('.indicator').toggleClass('time');
    });
});


/*sign_wrp*/
$(function () {
    $('.sign_tri1').click(function () {
        $(this).parent('.sign_wrap').toggleClass('on');
    });

    $('.sign_movie .x24').click(function () {
        $(this).parents('.sign_wrap').removeClass('on');
        $(this).parents('.sign_wrap').children('.sgb_space').children('.sign_camera').removeClass('on');
    });
});

$(function () {
    $('.sign_bus').click(function () {
        $(this).toggleClass('on');
        $(this).parents('.sign_wrap').toggleClass('on');
    });

    $('.pop_road_cont .x24').click(function () {
        $(this).parents('.sign_wrap').removeClass('on');
        $(this).parents('.sign_wrap').children('.sgb_stop').children('.sign_bus').removeClass('on');
    });

    $('.sign_cct').click(function () {
        $(this).toggleClass('on');
        $(this).parents('.sign_wrap').toggleClass('on');
    });

    /*dw add*/
    $('.pop_link_cont .x24').click(function () {
        $(this).parents('.sign_wrap').removeClass('on');
        $(this).parents('.sign_wrap').children('.link_space').children('.sign_cct').removeClass('on');
    });

    $('.pop_accuracy_cont .x24').click(function () {
        $(this).parents('.sign_wrap').removeClass('on');
        $(this).parents('.sign_wrap').children('.accuracy_space').children('.sign_cct').removeClass('on');
    });
    /*dw add end*/

    $('.sign_camera').click(function () {
        $(this).toggleClass('on');
        $(this).parents('.sign_wrap').toggleClass('on');
    });

    $('.sign_vms').click(function () {
        $(this).toggleClass('on');
        $(this).parents('.sign_wrap').toggleClass('on');
    });

    $('.sign_see').click(function () {
        $(this).toggleClass('on');
        $(this).parents('.sign_wrap').toggleClass('on');
    });

    $('.sign_cctv').click(function () {
        $(this).toggleClass('on');
        $(this).parents('.sign_wrap').toggleClass('on');
    });

    $('.sign_box').click(function () {
        $(this).toggleClass('on');
        $(this).parents('.sign_wrap').toggleClass('on');
    });

    $('.park_sign').click(function () {
        $(this).toggleClass('on');
        $(this).parents('.sign_wrap').toggleClass('on');
    });

    $('.pop_park_cont .x24').click(function () {
        $(this).parents('.sign_wrap').removeClass('on');
        $(this).parents('.sign_wrap').children('.park_space').children('.park_sign').removeClass('on');
    });
});


/*pop_indicator*/
$(function () {
    $('.express').click(function () {
        $('.pop_indicator').addClass('on');
    });

    $('.pop_bg_trans').click(function () {
        $(this).parents('.pop_container').removeClass('on');
    });

    $('.pop_top .x24').click(function () {
        $(this).parents('.pop_container').removeClass('on');
    });

    $('.plant_line').click(function () {
        $('.pop_facility').addClass('on');
    });

    $('.analysis').click(function () {
        $('.pop_analysis').addClass('on');
    });
});


/*foot_left*/
$(function () {
    $('.foot_put').focusin(function () {
        $('.foot_search').show();
    });

    $('.p_val').click(function () {
        let text = $(this).html();
        $('.foot_put').val(text);
        $('.foot_search').hide();
    });
});


/*foot_right*/
$(function () {
    $('.combo_mark').click(function () {
        $('.foot_search').hide();
    });

    $('.combo_rep').click(function () {
        $('.foot_set').removeClass('on');
        $('.foot_exam').removeClass('on');
        $('.foot_sort').removeClass('on');
        $('.foot_rep').toggleClass('on');
    });
    $('.combo_sort').click(function () {
        $('.foot_rep').removeClass('on');
        $('.foot_set').removeClass('on');
        $('.foot_exam').removeClass('on');
        $('.foot_sort').toggleClass('on');
    });
    $('.combo_exam').click(function () {
        $('.foot_rep').removeClass('on');
        $('.foot_sort').removeClass('on');
        $('.foot_set').removeClass('on');
        $('.foot_exam').toggleClass('on');
    });
    $('.combo_set').click(function () {
        $('.foot_rep').removeClass('on');
        $('.foot_sort').removeClass('on');
        $('.foot_exam').removeClass('on');
        $('.foot_set').toggleClass('on');
    });
    $('.combo_out').click(function () {
        $('.foot_rep').removeClass('on');
        $('.foot_sort').removeClass('on');
        $('.foot_exam').removeClass('on');
        $('.foot_set').removeClass('on');
    });

    $('.foot_pan_bg').click(function () {
        $('.foot_search').hide();
        $('.foot_sort').removeClass('on');
        $('.foot_exam').removeClass('on');
        $('.foot_set').removeClass('on');
    });
});

$(function () {
    $('.panel_top .x20').click(function () {
        $('.foot_sort').removeClass('on');
        $('.foot_exam').removeClass('on');
        $('.foot_set').removeClass('on');
    });

    $('.set_list').click(function () {
        $(this).toggleClass('on');
    });
});


/*gr_list*/
$(function () {
    $('.set_top').click(function () {
        $(this).toggleClass('on');
        $(this).children('.set_arrow').toggleClass('down');
        $(this).siblings('.set_cont').slideToggle();
    });

    $('.list_cont').click(function () {
        $(this).toggleClass('on');
    });
});


/*mode_set*/
$(function () {
    $('.mode_race').click(function () {
        $('.pop_race_cont').toggleClass('on');
    });
    $('.pop_race_cont .x24').click(function () {
        $(this).parents('.pop_race_cont').removeClass('on');
    });

    $('.mode_place').click(function () {
        $('.pop_place_cont').toggleClass('on');
    });
    $('.pop_place_cont .x24').click(function () {
        $(this).parents('.pop_place_cont').removeClass('on');
    });

    $('.mode_control').click(function () {
        $('.pop_control_cont').toggleClass('on');
    });
    $('.pop_control_cont .x24').click(function () {
        $(this).parents('.pop_control_cont').removeClass('on');
    });
});


/*indi_tab*/
$(function () {
    $('.tab').click(function () {
        $('.tab').removeClass('on');
        $(this).addClass('on');
        $('.indict_left').css('display', 'none');
        $('.indicator_right').css('display', 'none');
        $('.simul_pop').css('display', 'none');
        /*dw add*/
        $('.radio_tortuousity_display').css('display', 'none');
        $('.radio_accuracy_display').css('display', 'none');
        $('.radio_route_display').css('display', 'none');
        $('.radio_station_display').css('display', 'none');
        /*dw add end*/

        if ($('.tab_bus').hasClass('on')) {
            $('.indict_bus').css('display', 'block');
            $('.indicator_bus').css('display', 'block');
        };

        if ($('.tab_bit').hasClass('on')) {
            $('.indict_bit').css('display', 'block');
            $('.indicator_bit').css('display', 'block');
        };

        if ($('.tab_route').hasClass('on')) {
            $('.indict_route').css('display', 'block');
        };

        if ($('.tab_sect').hasClass('on')) {
            $('.indict_sect').css('display', 'block');
            /*dw add*/
            $('.radio_tortuousity_display').css('display', 'block');
            $('.radio_accuracy_display').css('display', 'none');
            $('.radio_route_display').css('display', 'none');
            $('.radio_station_display').css('display', 'none');
            /*dw add end*/
        };
    });
});


/*ch_radio*/
$(function () {
    $('.ch_radio').click(function () {
        $('.ch_radio').removeClass('on');
        $(this).addClass('on');

        /*dw add*/
        if ($('.radio_tortuousity').hasClass('on')) {
            $('.radio_tortuousity_display').css('display', 'block');
            $('.radio_accuracy_display').css('display', 'none');
            $('.ch_radio_second').removeClass('on');
            $('.radio_route_display').css('display', 'none');
            $('.radio_station_display').css('display', 'none');
        };

        if ($('.radio_accuracy').hasClass('on')) {
            $('.radio_tortuousity_display').css('display', 'none');
            $('.radio_accuracy_display').css('display', 'block');
            $('.radio_route').addClass('on');
            $('.radio_route_display').css('display', 'block');
            $('.radio_station_display').css('display', 'none');
        };
        /*dw add end*/
    });

    /*dw add*/
    $('.ch_radio_second').click(function () {
        $('.ch_radio_second').removeClass('on');
        $(this).addClass('on');

        if ($('.radio_route').hasClass('on')) {
            $('.radio_tortuousity_display').css('display', 'none');
            $('.radio_accuracy_display').css('display', 'block');
            $('.radio_route_display').css('display', 'block');
            $('.radio_station_display').css('display', 'none');
        };

        if ($('.radio_station').hasClass('on')) {
            $('.radio_tortuousity_display').css('display', 'none');
            $('.radio_accuracy_display').css('display', 'block');
            $('.radio_route_display').css('display', 'none');
            $('.radio_station_display').css('display', 'block');
        };
    });
    /*dw add end*/
});


/*simul_pop*/
$(function () {
    $('.btn_simul').click(function () {
        $('.simul_pop').css('display', 'block');
    });

    $('.simul_pop_top .pop_x').click(function () {
        $('.simul_pop').hide();
    });

    $('.btn_play').click(function () {
        $(this).toggleClass('stop');
    });
});


/*indi_etc*/
$(function () {
    $('.indi_etc').click(function () {
        $('.indi_etc').removeClass('on');
        $(this).addClass('on');
        $('.pop_traff_cont').css('display', 'none');

        if ($('.etc_suddenly').hasClass('on')) {
            $('.pop_suddenly').css('display', 'block');
        }
        if ($('.etc_signal').hasClass('on')) {
            $('.pop_signal').css('display', 'block');
        }
        if ($('.etc_serious').hasClass('on')) {
            $('.pop_serious').css('display', 'block');
        }
        if ($('.etc_emergency').hasClass('on')) {
            $('.pop_emergency').css('display', 'block');
        }
        if ($('.etc_cctv').hasClass('on')) {
            $('.pop_cctv').css('display', 'block');
        }
        if ($('.etc_vms').hasClass('on')) {
            $('.pop_vms').css('display', 'block');
        }
        if ($('.etc_situation').hasClass('on')) {
            $('.pop_situation').css('display', 'block');
        }
        if ($('.etc_predict').hasClass('on')) {
            $('.pop_predict').css('display', 'block');
        }
        if ($('.etc_digital').hasClass('on')) {
            $('.pop_digital').css('display', 'block');
        }
        if ($('.etc_snow').hasClass('on')) {
            $('.pop_snow').css('display', 'block');
        }
    });

    $('.pop_traff_cont .x24').click(function () {
        $('.pop_traff_cont').css('display', 'none');
        $('.indi_etc').removeClass('on');
    });
});


/*dw add indi_pop_etc*/
$(function () {
    $('.indi_pop_etc').click(function () {
        $('.pop_rnntf').css('display', 'block');
    });

    $('.pop_rnntf .pop_x').click(function () {
        $('.pop_rnntf').hide();
        /*$('.pop_rnntf').css('display', 'none');
        $('.indi_pop_etc').removeClass('on');*/
    });
});

/*dw add btwin_popup*/
function btwin_popup() {
    $('.pop_digital').css('display', 'block');
}
$(function () {
    $('.pop_digital .pop_x').click(function () {
        $('.pop_digital').hide();
        /*$('.pop_digital').css('display', 'none');*/
    });
});

/*pop_list_table*/
$(function () {
    $('.pop_list_table td .chck').click(function () {
        $(this).toggleClass('on');
        $(this).parents('.pop_list_table tr').toggleClass('contact');
        $(this).parents('.pop_list_table tr').css('display', 'table-row');
    });

    $('.pop_list_table .psrch_txt').click(function () {
        $('.pop_list_table tr').css('display', 'none');
        $(this).parents('.pop_list_table tr').css('display', 'table-row');
        $('.pop_mode').css('display', 'none');
        $(this).parents('.pop_list_wrap').addClass('hauto');
        $('.pop_hidd_contents').css('display', 'block');
    });

    $('.btn_cancel').click(function () {
        $('.pop_hidd_contents').css('display', 'none');
        $('.pop_list_table tr').css('display', 'table-row');
        $('.pop_mode').css('display', 'block');
        $('.pop_list_wrap').removeClass('hauto');
    });
});

/*contact_table*/
$(function () {
    $('.contact_table td .chck').click(function () {
        $(this).toggleClass('on');
        $(this).parents('.contact_table tr').toggleClass('contact');
    });
});


/*login*/
$(function () {
    $('.login_check').click(function () {
        $(this).toggleClass('on');
    });
});


/*.cir_x*/
$(function () {
    $('.list_table .cir_x').click(function () {
        $(this).parents('tr').css('display', 'none');
    });
    /*dw add*/
    $('.ta_manual_list_table .cir_x').click(function () {
        $(this).parents('tr').css('display', 'none');
    });
    /*dw add end*/
});



/*thick_table*/
$(function () {
    $('.analy_list_wrap .thick_table td').click(function () {
        $(this).parents('tr').toggleClass('contact');
    });

    $('.list_table td .chck').click(function () {
        $(this).toggleClass('on');
        $(this).parents('tr').toggleClass('contact');
    });

    /*dw add*/
    $('.ta_manual_list_table td .chck').click(function () {
        $(this).toggleClass('on');
        $(this).parents('tr').toggleClass('contact');
    });
    /*dw add end*/

    $('.control_list_wrap .thick_table td').click(function () {
        $(this).parents('tr').toggleClass('contact');
    });
    $('.snow_list_wrap .thick_table td').click(function () {
        $(this).parents('tr').toggleClass('contact');
    });
});


/*pop_predict*/
$(function () {
    $('.prd_pop_top .pop_x').click(function () {
        $(this).parents('.pop_predict').css('display', 'none');
        $('.indi_etc').removeClass('on');
    });
});


/*pop_snow*/
$(function () {
    $('.indicator_snow .indi_top').click(function () {
        $('.indicator_snow').toggleClass('hauto');
    });

    $('.car_snow').click(function () {
        $(this).toggleClass('on');
    });

    $('.car_self').click(function () {
        $(this).toggleClass('on');
    });

    $('.car_emer').click(function () {
        $(this).toggleClass('on');
    });

    $('.car_illegal').click(function () {
        $(this).toggleClass('on');
    });
});