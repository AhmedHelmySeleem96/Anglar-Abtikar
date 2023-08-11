if ($('.page-wrapper').length > 0) {

$(function() {
  $("#menu").metisMenu();
  $(".main-content").css('min-height',$(window).height() -  60)
  $('.slim-scroll').slimScroll({    
    height: "auto"
  });

  $(window).resize(function() {
    $(".main-content").css('min-height',$(window).height() - 60)
    $('.slim-scroll').slimScroll({    
      height: "auto"
    });
  });


  /*menu toggle*/
  $(".open-close").on('click', function() {
    if ($(".container-page").hasClass("content-wrapper")) {
      $(".container-page").trigger("resize");
      $(".container-page").removeClass("content-wrapper");
      $(".sidebar-nav, .slimScrollDiv").css("overflow", "hidden").parent().css("overflow", "visible");
      $(".open-close i").removeClass("icon-arrow-left-circle");
      $(".main-header").removeClass("small-width");
      $(".site-logo").removeClass("small-width-size");
      $("main").removeClass("small-width");
      $(".big-logo").show();
      $(".small-logo").hide();
      $(".logo span").show();
      setTimeout(function() {
        window.dispatchEvent(new Event('resize'));
      }, 200);
    } else {
      $(".container-page").trigger("resize");
      $(".container-page").addClass("content-wrapper");
      $(".sidebar-nav, .slimScrollDiv").css("overflow-x", "visible").parent().css("overflow", "visible");
      $(".open-close i").removeClass("icon-arrow-left-circle");
      $(".site-logo").addClass("small-width-size");
      $(".main-header").addClass("small-width");
      $("main").addClass("small-width");
      $(".big-logo").hide();
      $(".small-logo").show();
      $(".logo span").hide();
      setTimeout(function() {
        window.dispatchEvent(new Event('resize'));
      }, 200);
    }
  });
  /*end menu toggle~*/
});
}
// ***** New 
if ($('.sidebar').length > 0) {
  
  $(function () {
    // add class to sidebar to collapse
    $(".open-close").click(function () {
      $(".sidebar").toggleClass("my_nav");
    
  });
  // show menu in small screen
    $(".openmenu").click(function () {
        $(".page-wrapper").toggleClass("showmenu");
    });
    // search in small screen
    $('.SMC').click(function(){
$('.search-input').toggle();
    });

})
}
// convert svg img to code
/* if ($('.speed-link').length > 0) {
  jQuery('img.svg').each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    jQuery.get(imgURL, function (data) {
        var $svg = jQuery(data).find('svg');
        if (typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }
        $svg = $svg.removeAttr('xmlns:a');
        $img.replaceWith($svg);
    }, 'xml');
});
  
} */
// data table

if ($('.data-table').length > 0) {
  $(function() {
    $('#example,#example-1').DataTable(
      
    );
} );

}


/* internal page */
/* calender */
// https://jqueryui.com/datepicker/#default
if ($('.datepicker-content').length > 0) {
  $(function() {
      $("#datepicker").datepicker({
          showOn: "button",
          buttonImage: "./images/common/calendar.png",
          buttonImageOnly: true,
          buttonText: "Select date",
          changeMonth: true,
          changeYear: true
      });

      $("#datepicker-2,#datepicker-18,#datepicker-19 ,#datepicker-20,#datepicker-23,#datepicker-24,#datepicker-25,#datepicker-26,#datepicker-27,#datepicker-28,#datepicker-29,#datepicker-30").datepicker({
          showOn: "button",
          buttonImage: "./images/common/calendar.png",
          buttonImageOnly: true,
          buttonText: "Select date",
          changeMonth: true,
          changeYear: true
      });
      $("#datepicker-3").datepicker({
          showOn: "button",
          buttonImage: "./images/common/calendar.png",
          buttonImageOnly: true,
          buttonText: "Select date",
          changeMonth: true,
          changeYear: true
      });
      $("#datepicker-4,#datepicker-5,#datepicker-6,#datepicker-7,#datepicker-8,#datepicker-9,#datepicker-10,#datepicker-11,#datepicker-12و#datepicker-13,#datepicker-14,#datepicker-15,#datepicker-16,#datepicker-34,#datepicker-35,#datepicker-36,#datepicker-37,#datepicker-38,#datepicker-40,#datepicker-41").datepicker({
          showOn: "button",
          buttonImage: "./images/common/calendar.png",
          buttonImageOnly: true,
          buttonText: "Select date",
          changeMonth: true,
          changeYear: true
      });
      $("#datepicker-31,#datepicker-32,#datepicker-33").datepicker({
          showOn: "button",
          buttonImage: "./images/common/calendar.png",
          buttonImageOnly: true,
          buttonText: "Select date",
          changeMonth: true,
          changeYear: true
      });
  });

}




if ($('.vertical-tab').length > 0) {

  $(document).ready(function() {
      //Horizontal Tab
      $('#parentHorizontalTab').easyResponsiveTabs({
          type: 'default', //Types: default, vertical, accordion
          width: 'auto', //auto or any width like 600px
          fit: true, // 100% fit in a container
          tabidentify: 'hor_1', // The tab groups identifier
          activate: function(event) { // Callback function if tab is switched
              var $tab = $(this);
              var $info = $('#nested-tabInfo');
              var $name = $('span', $info);
              $name.text($tab.text());
              $info.show();
          }
      });

      // Child Tab
      $('#ChildVerticalTab_1').easyResponsiveTabs({
          type: 'vertical',
          width: 'auto',
          fit: true,
          tabidentify: 'ver_1', // The tab groups identifier
        // activetab_bg: '#23c2c8', // background color for active tabs in this group
          inactive_bg: '#fff', // background color for inactive tabs in this group
          active_border_color: '#ced4da', // border color for active tabs heads in this group
          active_content_border_color: 'transparent' // border color for active tabs contect in this group so that it matches the tab head border
      });

      //Vertical Tab
      $('#parentVerticalTab').easyResponsiveTabs({
          type: 'vertical', //Types: default, vertical, accordion
          width: 'auto', //auto or any width like 600px
          fit: true, // 100% fit in a container
          closed: 'accordion', // Start closed if in accordion view
          tabidentify: 'hor_1', // The tab groups identifier
          activate: function(event) { // Callback function if tab is switched
              var $tab = $(this);
              var $info = $('#nested-tabInfo2');
              var $name = $('span', $info);
              $name.text($tab.text());
              $info.show();
          }
      });
  });
   
}

// select 
if ($('.one-option ').length > 0) {
  $('.one-option').dropdown({
    limitCount: 1,
    searchable: false
  });
}
if ($('.select-option').length > 0) {
  // https://www.jqueryscript.net/form/jQuery-Multiple-Select-Plugin-For-Bootstrap-Bootstrap-Multiselect.html
$(document).ready(function() {
   $('#example-single,#example-single-1,#example-single-2,#example-single-3,#example-single-4,#example-single-5,#example-single-6,#example-single-7,#example-single-11,#example-single-12,#example-single-13,#example-single-14,#example-single-15,#example-single-16,#example-single-17,#example-single-18,#example-single-19,#example-single-20,#example-single-21,#example-single-22,#example-single-24,#example-single-25').multiselect({
       disabledText: 'Disabled ...'

   });
});
}

// delete-box
if ($('.delete-box').length > 0) {
     $(document).ready(function () {
      $('.delete-btn').click(function () {
       
        $(this).parent('.delete-box').find('.message').toggleClass('show-message');
      })
      $('.action-btn').click(function () {
      
        $(this).parent('.message').removeClass('show-message');
      })
    }) 
}

// Time Picker
if ($('.time-picker-content').length > 0) {
  $('#timepicker1').timepicki();
}
// Inside Tab

if ($('.inside-tab').length > 0) {
   function docter(evt, insideTab) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(insideTab).style.display = "block";
    evt.currentTarget.className += " active";

  }
  if ($('.inside-tab-2').length > 0) {
    function docters0(evt, insideTab0) {
      let i, tabcontent0, tablinks0;
      tabcontent0 = document.getElementsByClassName("tabcontent-2");
      for (i = 0; i < tabcontent0.length; i++) {
        tabcontent0[i].style.display = "none";
      }
      tablinks0 = document.getElementsByClassName("tablinks0");
      for (i = 0; i < tablinks0.length; i++) {
        tablinks0[i].className = tablinks0[i].className.replace(" active", "");
      }
      document.getElementById(insideTab0).style.display = "block";
      evt.currentTarget.className += " active";

    }

    document.getElementById("defaultOpen-2").click();
 
   }
  document.getElementById("defaultOpen").click(); 
}

 // uploader img
if ($('.uploader-img').length > 0) {
  $(document).ready(function() {
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
  
            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
   
    $(".file-upload").on('change', function(){
        readURL(this);
    });
    
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });
  });
}




if ($('.bs-selec').length > 0) {
  //  https://developer.snapappointments.com/bootstrap-select/
   $('.selectpicker').selectpicker();
}
if ($('.sidebar').length > 0) {
  $( ".sidebar" ).hover(function() {

    $(this).parents('.content-wrapper').addClass('Hover-side-bar');
  
  }
  , function(){
      $(this).parents('.content-wrapper').removeClass('Hover-side-bar');
  
  }
  ); 
}
if ($('.remove-item').length > 0) {
   //swal("هل انت متاكد من الحذف ؟", "...and here's the text!");
   function sweetlert(){
    swal({
  title: " هل انت متاكد من الحدف ؟",
  text: "لن تتمكن من استعادة هذا الملف  مرة اخرى !",
  icon: "warning",
  //buttons: true,
  // dangerMode: true,
    buttons: ["الغاء", "حذف"],


})
.then((willDelete) => {
  if (willDelete) {
    swal("تم الحذف بنجاح", {
      icon: "success",
    });
  } else {
   // swal("Your imaginary file is safe!");
   swal("لم يتم الحذف", {
      icon: "error",
    });
  }
});
  }
  
// }
}
/* if ($('.open-search').length > 0) { */
  $(document).ready(function(){
    $('.open-search').click(function(){
  $('.dataTables_filter,.dataTables_length').toggle();
    })
  })
/* } */

if ($('.bs-selec').length > 0) {
}



// add default local storage
//document.body.classList.add(localStorage.getItem("pageColor"));


var MyPage = document.getElementById("container-page");



MyPage.classList.add(localStorage.getItem('pageColor') || 'default-color');
var el=document.querySelectorAll('.switch-color li');
var classesList=[];
for(var i=0 ;i < el.length; i++){
 // set color in arraay
  classesList.push(el[i].getAttribute('data-color'));
  el[i].addEventListener('click',function(){
  
      MyPage.classList.remove(...classesList);
   MyPage.classList.add(this.getAttribute('data-color')); 
    // add data in local storage
    localStorage.setItem('pageColor',this.getAttribute('data-color'));

  },false);
}





// dark & light

function getTheme() {
  return localStorage.getItem('theme') || 'light';
  }
  function saveTheme(theme) {
  localStorage.setItem('theme', theme);
  }
  
  const colorScheme = document.querySelector('meta[name="color-scheme"]');
  function applyTheme(theme) {
  document.body.className = theme;
   colorScheme.content = theme;
  }
  
  function rotateTheme(theme) {
  if (theme === 'light') {
  return 'dark'
  }
  return 'light';
  }
  
  const themeDisplay = document.getElementById('theme');
  const themeToggler = document.getElementById('theme-toggle');
  
  // Mimic heavy load done by other JS scripts
  setTimeout(() => {
  let theme = getTheme();
  applyTheme(theme);
  themeDisplay.innerText = theme;
  
  themeToggler.onclick = () => {
  const newTheme = rotateTheme(theme);
  applyTheme(newTheme);
  themeDisplay.innerText = newTheme;
  saveTheme(newTheme);
  
  theme = newTheme;
  }
  }, 0);
  

  // Time Picker
//https://senthilraj.github.io/TimePicki/index.html
if ($('.time-picker-content').length > 0) {
    $('#timepicker1,#timepicker2').timepicki();
}


// slick in صفة فواتير المرضى
if ($('.cont-Recepion-btn3').length > 0) {
  $('.Recepion-btn ').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 10,
      slidesToScroll: 10,
      arrows: true,
      rtl: true,
      draggable:true,

      // autoplay:true,
      responsive: [{
              breakpoint: 1024,
              settings: {
                  slidesToShow: 6,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: false,

              }
          },

          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  dots: false,
              }
          },
          {
              breakpoint: 400,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  dots: false,
              }
          }
      ]
  });
}


// multi uploader
if ($('.multi-uploader').length > 0) {
  // https://pqina.nl/filepond/#examples
  $(function(){

    $.fn.filepond.registerPlugin(FilePondPluginImagePreview);

    $('.my-pond').filepond();

    $('.my-pond').filepond('allowMultiple', true);
  
    
  
  });
}
if ($('.my_editor').length > 0) {
  // https://summernote.org/getting-started/#run-summernote
$(document).ready(function() {
  $('#summernote,#summernote2,#summernote3').summernote();
});
}