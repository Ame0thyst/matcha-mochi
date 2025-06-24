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
  "Halo Sayangku .. apa kabar?",
  "Udah bobo belum nih? apa sekarang uda siang",
  "Pasti ngira kalau aku bakal lupa kannnn.. kwkwkw",
  "Sebenernya au belum siap ngerjain ini... jadi gaenak kalau cuma ngucapi Happy birthday aja. apalagi lewat ML doang",
  "Gimana.. kamu suka ga kue yang aku bikin, eh. kamu yang bikin maksudnya kwkw",
  "Selamat Ulang tahun ya cantikkuu   wkwkkw. semoga segalanya dilancarkan, dapet yang terbaik dan makin sabarrrrrrrrr. apalagi kalau abis WL WL di game ",
  "eh eh.., dan juga.. selamat anniversary  yang ke 2 bulan yaa.. semoga kita makin kompak, makin saling mengerti, dan makin saling support satu sama lain",
  "Juga semoga dengan bertambahnya umur kamu, semoga kamu makin dikuatkan dengan semuanya",
  "semoga kamu bisa lebih sabar, lebih dewasa, lebih bijaksana, dan lebih baik lagi dari sebelumnya",
  "Apa lagi ya... udah si itu aja.. oh iya, jangan terlalu sering begadang. gabaik tauuuuuuk. apalagi kalau udah jam 2 pagi, mending tidurrrr",
  "jangan ngomong kasar kasar yaah. ntah kesiapapun itu, kalau udah di puncaknya.. mending pergi aja. okayy ^_^",
  "sama sama terus yak kitaaa.. awas aja ninggalin. hihhh.. nanti aku gentayanginnn. ahaha becanda. kan aku masi idup",
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
