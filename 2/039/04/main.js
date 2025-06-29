$(".start").click(function () {
  $(".stage1").fadeOut();
  fire_modal(
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/cake_modal.png",
    "Nona Fany yang lucuuk ..ayo bikin kue :)",
    "Happy birthday yang ke 19 th yaaa.. ciee dah tambah tambah nihhh, sini bikin kuee "
  );
});

progress = 1;

$(".modal_content button").click(function () {
  progress++;
  close_modal(progress);
});

function close_modal(callback) {
  modal.css("transform", "translateY(-50%) scale(0)");
  setTimeout(function () {
    $(".stage" + callback).fadeIn();
  }, 600);
}

function fire_modal(imgurl, title, content) {
  modal = $(".birthday_inner__modal");
  modal.find("h1").html(title);
  modal.find("img").attr("src", imgurl);
  modal.find("p").html(content);
  setTimeout(function () {
    modal.css("transform", "translateY(-50%) scale(1)");
  }, 1000);
}

mixing = false;
mixtimes = 0;

$(".mixer").click(function () {
  if (mixing == false) {
    mixing = true;
    mixtimes++;
    $(".mix_spoon img").addClass("move");
    setTimeout(function () {
      $(".mix_spoon img").removeClass("move");
      mixing = false;
    }, 1000);
  }
  if (mixtimes == 6) {
    $(".stage2").fadeOut();
    fire_modal(
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/mix_modal.png",
      "Bahan selesai di campur !",
      "Selamat wahai sepuh gold lane 🔥, kmu udah nyampurin dengan sempurna. nah sekarang ayo kita oven."
    );
  }
});

// $(".tin").draggable({
//   revert: true,
// });
// $(".oven").droppable({
//   drop: function (event, ui) {
//     $(".stage3").fadeOut();
//     fire_modal(
//       "https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/oven_modal.png",
//       "Kue udah siap dipanggang!",
//       "Wah kamuu jago. liat tu.. kue nya keliatan enak banget.. eiiits belum selese. sekarang kita kasi toping"
//     );
//   },
// });
// Cek apakah perangkat mendukung touch
var isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints;

// Fungsi untuk drag-and-drop pada perangkat desktop
function enableDesktopDrag() {
  $(".tin").draggable({
    revert: true,
  });

  $(".oven").droppable({
    drop: function (event, ui) {
      $(".stage3").fadeOut();
      fire_modal(
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/oven_modal.png",
        "Kue udah siap dipanggang!",
        "Wah kamuu jago. liat tu.. kue nya keliatan enak banget.. eiiits belum selese. sekarang kita kasi toping"
      );
    },
  });
}

// Fungsi untuk drag-and-drop pada perangkat mobile
function enableMobileTouch() {
  $(".tin").on("touchstart", function (e) {
    var touch = e.originalEvent.touches[0];
    var offsetX = touch.pageX - $(this).offset().left;
    var offsetY = touch.pageY - $(this).offset().top;

    $(this).on("touchmove", function (e) {
      var touch = e.originalEvent.touches[0];
      $(this).css({
        top: touch.pageY - offsetY,
        left: touch.pageX - offsetX,
      });
    });

    $(this).on("touchend", function () {
      $(this).off("touchmove touchend");
      // Handle drop action here
      if (isInOven($(this))) {
        $(".stage3").fadeOut();
        fire_modal(
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/oven_modal.png",
          "Kue udah siap dipanggang!",
          "Wah kamuu jago. liat tu.. kue nya keliatan enak banget.. eiiits belum selese. sekarang kita kasi toping"
        );
      }
    });
  });
}

// Fungsi untuk memeriksa apakah gambar kue sudah masuk ke dalam oven
function isInOven(element) {
  var oven = $(".oven");
  var ovenOffset = oven.offset();
  var ovenWidth = oven.width();
  var ovenHeight = oven.height();
  var elementOffset = element.offset();

  return (
    elementOffset.left >= ovenOffset.left &&
    elementOffset.top >= ovenOffset.top &&
    elementOffset.left + element.width() <= ovenOffset.left + ovenWidth &&
    elementOffset.top + element.height() <= ovenOffset.top + ovenHeight
  );
}

// Panggil fungsi berdasarkan apakah perangkat mendukung touch atau tidak
$(document).ready(function () {
  if (isTouchDevice) {
    // Aktifkan drag-and-drop untuk perangkat mobile
    enableMobileTouch();
  } else {
    // Aktifkan drag-and-drop untuk desktop
    enableDesktopDrag();
  }
});

bases = 0;
fillings = 0;

$(".sponges .item_inner").click(function () {
  $(".sponges").addClass("inactive");
  $(".fillings").removeClass("inactive");
  t = $(this).attr("class").split(" ").pop();
  bases++;
  if (bases < 6) {
    add_sponge(t);
  }
});

$(".fillings .item_inner").click(function () {
  $(".fillings").addClass("inactive");
  $(".sponges").removeClass("inactive");
  f = $(this).attr("class").split(" ").pop();
  fillings++;
  if (fillings < 7) {
    add_filling(f);
  }
});

function add_sponge(t) {
  $(".cakemake").prepend(
    '<div style="width:' +
      (200 - bases * 20) +
      'px" class="sponge sponge-' +
      t +
      '"><div></div><div></div><div></div><div></div><div></div></div>'
  );
  $(".sponges h5 span").html(bases);
}

$(".startagain").click(function () {
  $(".cakemake").html('<div class="base"></div>');
  bases = 0;
  fillings = 0;
  $(".sponges h5 span").html(bases);
  $(".fillings h5 span").html(fillings);
  $(".fillings").removeClass("inactive");
  $(".sponges").addClass("inactive");
});

function add_filling(f) {
  $(".cakemake").prepend(
    '<div style="width:' +
      (200 - bases * 20) +
      'px" class="filling filling-' +
      f +
      '"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>'
  );
  $(".fillings h5 span").html(fillings);
}

function fin() {
  $("h1,h2,.options,.startagain,.add").fadeOut();

  setTimeout(function () {
    $(".cakemake").fadeIn();
    $(".cakemake").animate({ "margin-top": "0px" });
  }, 1000);
  add_candle();
  $("svg").addClass("text");
}

function add_candle() {
  var stages = $(".cakemake > div").length;
  var h = (stages / 2) * 41 + 22 + "px";
  console.log(stages);
  $(".cakemake").prepend(
    '<div class="candle" ><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/candle.png" /></div>'
  );
  $("svg").show();
  setTimeout(function () {
    $(".sa").fadeIn();
  }, 2200);
}

$(".add").click(function () {
  fin();
});

$(".sa").click(function () {
  window.location.assign("073/index.html");
});
