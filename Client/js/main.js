//Функцию, которая запустится после того, как DOM полностью загрузился
$(document).ready(function () {
  $("#btnAddDataSimple").click(function () {
    $.ajax({
      url: "http://127.0.0.1:3000/api/getSimpleFile",
      method: "get",
      dataType: "text",
      success: function (data) {
        $("#textArea2").text(data);
      },
    });
  });

  $("#btnAddDataJson").click(function () {
    $.ajax({
      url: "http://127.0.0.1:3000/api/getJsonFile",
      method: "get",
      dataType: "json",
      success: function (data) {
        $("#textAreaJson").text(data);
      },
    });
  });

  $("#DataForm").submit(function (e) {
    e.preventDefault();

    var form = $(this);

    $.ajax({
      type: "POST",
      url: "http://127.0.0.1:3000/api/setData",
      //serialize() кодирует набор элементов формы в виде строки, пригодной для дальнейшего представления в составе строки запроса URL адреса
      data: form.serialize(),
      success: function (data) {
        alert(data);
      },
    });
  });
});
