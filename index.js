$(document)
.ready(function() {

$('.ui.dropdown')
.dropdown({
  on: 'hover'
})
;

$('.information')
  .transition('scale in', 1000)
;

$("#abme").click(function() {
  $('.aboutme.modal')
    .modal('show')
    ;
});

$("#abme1").click(function() {
  $('.aboutme.modal')
  .modal('show')
  ;
});

var message = "\'\'\'\nWelcome to my website!! I wanted to keep my site interesting.\nSo here is a PYTHON editor!!\nHAVE FUN!\n\'\'\'\n";
var timeinterval = "\n\nimport time\n\ntime.sleep(1)\n\nprint \"I hope you like this little project\""
// setInterval(changeSides, 3000);
var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.getSession().setMode("ace/mode/python");
editor.setValue(message +
"magic = []\n\nmagic.append(0b1001000)\nmagic.append(0b1000101)\nmagic.append(0b1001100)\nmagic.append(0b1001100)\nmagic.append(0b1001111)\nmagic.append(0b100000)\nmagic.append(0b1010111)\nmagic.append(0b1001111)\nmagic.append(0b1010010)\nmagic.append(0b1001100)\nmagic.append(0b1000100)\n\ntrick = \"\"\n\nfor potion in magic:\n\ttrick += chr(potion)\n\nprint trick"
+ timeinterval);

function outf(text) {
  var mypre = document.getElementById("output");
  mypre.innerHTML = mypre.innerHTML + text;
}
function builtinRead(x) {
  if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
    throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
  }
$("#editbutton").click( function runit() {
    var prog = editor.getValue();
    var mypre = document.getElementById("output");
    mypre.innerHTML = '';
    Sk.pre = "output";
    Sk.configure({output:outf, read:builtinRead});
    // (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'mycanvas';
    var myPromise = Sk.misceval.asyncToPromise(function() {
      return Sk.importMainWithBody("<stdin>", false, prog, true);
    });
    myPromise.then(function(mod) {
      console.log("success");
    },
    function(err) {
      outf("Error in the code")
      console.log(err.toString());
    });
  });

})
;
