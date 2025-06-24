var $messages = $(".messages-content"),
  d,
  h,
  m,
  i = 0;

$(window).load(function () {
  $messages.mCustomScrollbar();
  setTimeout(function () {
    fakeMessage();
  }, 100);
});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar("scrollTo", "bottom", {
    scrollInertia: 10,
    timeout: 0,
  });
}

function setDate() {
  d = new Date();
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ":" + m + "</div>").appendTo(
      $(".message:last")
    );
  }
}

function insertMessage() {
  msg = $(".message-input").val();
  if ($.trim(msg) == "") {
    return false;
  }
  $('<div class="message message-personal">' + msg + "</div>")
    .appendTo($(".mCSB_container"))
    .addClass("new");
  setDate();
  $(".message-input").val(null);
  updateScrollbar();
  setTimeout(function () {
    fakeMessage();
  }, 1000 + Math.random() * 20 * 100);
}

$(".message-submit").click(function () {
  insertMessage();
});

$(window).on("keydown", function (e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
});

var Fake = [
  "Halo Princess .. apa kabar?",
  "Udah bobo belum nih? pasti belom",
  "pasti lagi push rank ya? wkwkwk",
  "Sebenernya au belum siap ngerjain ini... jadi gaenak kalau cuma ngucapi Happy birthday aja. apalagi lewat ML doang dan wa doang",
  "Gimana.. kamu suka ga kue yang aku bikin, eh. kamu yang bikin maksudnya kwkw",
  "Selamat Ulang tahun ya cantikkuu   wkwkkw. semoga segalanya dilancarkan, dapet tim pt an yang terbaik dan makin sabarrrrrrrrr. apalagi kalau abis WL WL di game ",
  "eh eh.., dan juga..api tik tok yang ke 46 ya kwkww.. semoga kita makin kompak, makin saling mengerti, dan makin saling support satu sama lain",
  "Juga semoga dengan bertambahnya umur kamu, semoga kamu makin dikuatkan dengan semuanya",
  "semoga kamu bisa lebih sabar, lebih dewasa, lebih bijaksana, dan lebih baik lagi dari sebelumnya",
  "udah pasti. harus lebih gemesiiiiin ahahaha",
  "Apa lagi ya... udah si itu aja.. oh iya, jangan terlalu sering begadang. gabaik tauuuuuuk. apalagi kalau udah jam 2 pagi, mending tidurrrr",
  "diminum atuh obat nyaaa.. ntar pileknya ga sembuh sembuh",
  "maaaa. liat fanny dia gamau miunum obat, padahal pilek udah 2 minggu ( ucap ku sok tau ) ",
  "sama sama terus yak kitaaa.. awas aja ninggalin. hihhh.. nanti aku gentayanginnn. ahaha becanda. kan aku masi idup",
  "ehemmm.... anuuu. kamu kan udah 19 tahun, jadi udah boleh afin kan? wkwkwk",
  "aku beruntung banget bisa ketemu kamuu tauuu",
  "walau kadang jarang nanyain tentang aku tapi kamu hampir selalu ada buat aku",

  "ihh kok malah jadi curhat sih ini",
  "maluuu..., kan aku cowo keren, masa curhat",
  "tapi gapapa deh, kan ini hari spesial kamu",
  "sekali lagi, selamat ulang tahun yaa cantikkuu",
  "Byee. sudah bole klik tombol 'selesai' ya",
];

function fakeMessage() {
  if ($(".message-input").val() != "") {
    return false;
  }
  $(
    '<div class="message loading new"><figure class="avatar"><img src="ikoo.png" /></figure><span></span></div>'
  ).appendTo($(".mCSB_container"));
  updateScrollbar();

  setTimeout(function () {
    $(".message.loading").remove();
    $(
      '<div class="message new"><figure class="avatar"><img src="ikoo.png" /></figure>' +
        Fake[i] +
        "</div>"
    )
      .appendTo($(".mCSB_container"))
      .addClass("new");
    setDate();
    updateScrollbar();
    i++;
  }, 1000 + Math.random() * 20 * 100);
}
