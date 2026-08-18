(function () {
  var JOBS = [
    { code: "23010001", city: "省直", unit: "哈尔滨师范大学", name: "专任教师（博士）", num: 3, edu: "博士研究生", major: "教育学、中国语言文学", cate: "教育类" },
    { code: "23010002", city: "省直", unit: "黑龙江省科学院", name: "博士科研人员", num: 5, edu: "博士研究生", major: "化学、材料、生物", cate: "综合管理类" },
    { code: "23010003", city: "省直", unit: "黑龙江科技大学", name: "博士教师", num: 4, edu: "博士研究生", major: "矿业工程、安全工程", cate: "教育类" },
    { code: "23010004", city: "省直", unit: "黑龙江省机关事务管理局所属事业单位", name: "工作人员", num: 2, edu: "本科及以上", major: "不限", cate: "综合管理类" },
    { code: "23020001", city: "哈尔滨市", unit: "哈尔滨市某事业单位", name: "综合管理岗", num: 6, edu: "本科及以上", major: "不限", cate: "综合管理类" },
    { code: "23020002", city: "哈尔滨市", unit: "哈尔滨市卫生健康事业单位", name: "医疗卫生岗", num: 8, edu: "本科及以上", major: "临床医学、护理学", cate: "卫生类" },
    { code: "23030001", city: "齐齐哈尔市", unit: "齐齐哈尔医学院及直属单位", name: "编制内工作人员", num: 10, edu: "本科及以上", major: "医学相关", cate: "卫生类" },
    { code: "23030002", city: "齐齐哈尔市", unit: "中共齐齐哈尔市委党校", name: "教学科研岗", num: 2, edu: "硕士研究生及以上", major: "马克思主义理论、公共管理", cate: "教育类" },
    { code: "23030003", city: "齐齐哈尔市", unit: "齐齐哈尔市卫生健康委", name: "大学生乡村医生", num: 15, edu: "大专及以上", major: "临床医学、中医学", cate: "卫生类" },
    { code: "23040001", city: "牡丹江市", unit: "牡丹江市事业单位", name: "综合管理岗", num: 4, edu: "本科及以上", major: "不限", cate: "综合管理类" },
    { code: "23050001", city: "佳木斯市", unit: "佳木斯市事业单位", name: "农业技术岗", num: 3, edu: "本科及以上", major: "农学、植物保护", cate: "农业农村类" },
    { code: "23060001", city: "大庆市", unit: "大庆市事业单位", name: "综合管理岗", num: 5, edu: "本科及以上", major: "不限", cate: "综合管理类" },
    { code: "23070001", city: "鸡西市", unit: "鸡西市事业单位", name: "教育岗", num: 4, edu: "本科及以上", major: "师范类", cate: "教育类" },
    { code: "23080001", city: "双鸭山市", unit: "双鸭山市事业单位", name: "卫生岗", num: 6, edu: "大专及以上", major: "护理学、临床医学", cate: "卫生类" },
    { code: "23090001", city: "伊春市", unit: "伊春职业学院", name: "专任教师", num: 3, edu: "硕士研究生及以上", major: "相关专业", cate: "教育类" },
    { code: "23100001", city: "七台河市", unit: "七台河市事业单位", name: "综合管理岗", num: 2, edu: "本科及以上", major: "不限", cate: "综合管理类" },
    { code: "23110001", city: "鹤岗市", unit: "鹤岗市事业单位", name: "综合管理岗", num: 3, edu: "本科及以上", major: "不限", cate: "综合管理类" },
    { code: "23120001", city: "黑河市", unit: "黑河市卫生健康委", name: "大学生乡村医生专项计划", num: 20, edu: "大专及以上", major: "临床医学、中医学", cate: "卫生类" },
    { code: "23130001", city: "绥化市", unit: "海伦市事业单位", name: "急需紧缺人才", num: 8, edu: "本科及以上", major: "公告所列专业", cate: "综合管理类" },
    { code: "23130002", city: "绥化市", unit: "安达市卫生健康局", name: "大学生乡村医生专项计划", num: 12, edu: "大专及以上", major: "临床医学", cate: "卫生类" },
    { code: "23140001", city: "大兴安岭地区", unit: "大兴安岭地直机关幼儿园", name: "幼儿教师", num: 4, edu: "本科及以上", major: "学前教育", cate: "教育类" },
    { code: "23140002", city: "大兴安岭地区", unit: "大箐山县卫生健康局", name: "大学生乡村医生", num: 10, edu: "大专及以上", major: "临床医学", cate: "卫生类" }
  ];

  var citySel = document.getElementById("city");
  var cateSel = document.getElementById("cate");
  var kwInput = document.getElementById("kw");
  var tbody = document.getElementById("tbody");
  var cities = ["全部"].concat(JOBS.map(function (j) { return j.city; }).filter(function (c, i, a) { return a.indexOf(c) === i; }));
  cities.forEach(function (c) {
    var o = document.createElement("option");
    o.value = c === "全部" ? "" : c;
    o.textContent = c;
    citySel.appendChild(o);
  });

  function render() {
    var city = citySel.value;
    var cate = cateSel.value;
    var kw = (kwInput.value || "").trim();
    tbody.innerHTML = "";
    JOBS.filter(function (j) {
      if (city && j.city !== city) return false;
      if (cate && j.cate !== cate) return false;
      if (kw && (j.name + j.unit + j.code).indexOf(kw) < 0) return false;
      return true;
    }).forEach(function (j) {
      var tr = document.createElement("tr");
      tr.innerHTML =
        "<td><input type='radio' name='job' value='" + j.code + "' /></td>" +
        "<td>" + j.code + "</td>" +
        "<td>" + j.city + "</td>" +
        "<td class='left'>" + j.unit + "</td>" +
        "<td class='left'>" + j.name + "</td>" +
        "<td>" + j.num + "</td>" +
        "<td>" + j.edu + "</td>" +
        "<td class='left'>" + j.major + "</td>" +
        "<td>" + j.cate + "</td>";
      tbody.appendChild(tr);
    });
  }

  document.getElementById("searchBtn").addEventListener("click", render);
  citySel.addEventListener("change", render);
  cateSel.addEventListener("change", render);
  render();

  document.getElementById("saveBtn").addEventListener("click", function () {
    var r = document.querySelector("input[name=job]:checked");
    if (!r) {
      alert("请先选择一个岗位");
      return;
    }
    var job = JOBS.filter(function (j) { return j.code === r.value; })[0];
    sessionStorage.setItem("selectedJob", JSON.stringify(job));
    location.href = "success.html";
  });
})();
