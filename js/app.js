(function () {
  var WEEK = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
  var el = document.getElementById("today");
  if (el) {
    var d = new Date();
    el.textContent = d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日 " + WEEK[d.getDay()];
  }

  document.querySelectorAll(".tabs span").forEach(function (tab) {
    tab.addEventListener("click", function () {
      document.querySelectorAll(".tabs span").forEach(function (t) { t.classList.remove("active"); });
      tab.classList.add("active");
    });
  });
})();
