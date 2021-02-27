// midnight black editor

ace.require("ace/ext/language_tools");
var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");
editor.setOptions({
  enableBasicAutocompletion: true,
  autoScrollEditorIntoView: true,
});
// white editor read only
// gitw
ace.require("ace/ext/language_tools");
var editor = ace.edit("editor1");
editor.setTheme("ace/theme/white");
editor.session.setMode("ace/mode/javascript");
editor.setOptions({
  enableBasicAutocompletion: true,
  autoScrollEditorIntoView: true,
  readOnly: true,
});

// run code and input output
function toggleRunCode() {
  var val = $("#hiddenValue").val();
  if (val == 0) {
    $("#inputOutputContain").removeClass("hide");
    $("#resizeWidth").addClass("w-30");
    $("#viewPro30").removeClass("w-50");
    $("#viewPro30").addClass("w-30");
    $("#hiddenValue").val(1);
  } else if (val == 1) {
    $("#inputTab").removeClass("active");
    $("#outputTab").addClass("active");
    $("#inputContent").removeClass("active");
    $("#outputContent").addClass("active");
    $("#hiddenValue").val(2);
  }
}
function toggleClose() {
  var val = $("#hiddenValue").val();
  if (val == 2) {
    $("#inputOutputContain").addClass("hide");
    $("#resizeWidth").removeClass("w-30");
    $("#viewPro30").addClass("w-50");
    $("#viewPro30").removeClass("w-30");
    $("#inputTab").addClass("active");
    $("#outputTab").removeClass("active");
    $("#inputContent").addClass("active");
    $("#outputContent").removeClass("active");
    $("#hiddenValue").val(0);
  } else if (val == 0) {
    $("#inputOutputContain").removeClass("hide");
    $("#resizeWidth").addClass("w-30");
    $("#viewPro30").removeClass("w-50");
    $("#viewPro30").addClass("w-30");
    $("#hiddenValue").val(1);
  } else if (val == 1) {
    $("#inputOutputContain").addClass("hide");
    $("#resizeWidth").removeClass("w-30");
    $("#viewPro30").addClass("w-50");
    $("#viewPro30").removeClass("w-30");
    $("#hiddenValue").val(0);
  }
}
