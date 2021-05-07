// Generated by Haxe 3.4.7
(function () { "use strict";
var Demo = function() { };
Demo.main = function() {
   console.log("haxe-terminaljs demo");
   var t = new Terminal();
   t.setWidth("100%");
   t.setHeight("200px");
   t.print("Hello, world!");
   t.setPreCursor("<span style=\"color:red;\">@</span>$ ");
   t.input(function(input) {
      console.log(input);
   });
   window.document.body.appendChild(t.html);
};
Demo.main();
})();
