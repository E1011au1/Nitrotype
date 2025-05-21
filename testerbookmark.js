javascript:
(function(){    function loadScript(u,c,e){var s=document.createElement('script');s.src=u;s.onload=c;s.onerror=e;(document.head||document.documentElement).appendChild(s);}

if(typeof Swal==='undefined'){
  loadScript('https://cdn.jsdelivr.net/npm/sweetalert2@11',function(){
    Swal.fire({
      icon:'warning',
      title:'Full credits to eason.',
      text:'\u26A0\u26A0\u26A0 I AM NOT RESPONSIBLE FOR YOUR ACC GETTING BANNED \u26A0\u26A0\u26A0'
    });
  },function(){
    console.error('Failed to load SweetAlert2.');
  });
}else{
  Swal.fire({
    icon:'warning',
    title:'Full credits to eason.',
    text:'\u26A0\u26A0\u26A0 I AM NOT RESPONSIBLE FOR YOUR ACC GETTING BANNED \u26A0\u26A0\u26A0'
  });
}
      var win,        accuracy = 80,        t = Object.values(document.querySelector("div.dash-copyContainer"))[1].children._owner.stateNode;    win = function(r) {        t.handleKeyPress(            "character",            new KeyboardEvent("keypress", { key: r ? t.props.lessonContent[t.typedIndex] : "$" })        );    };    var m = t.input.keyHandler;    t.input.keyHandler = function(e, n) {        if (n.key === "\n") {            t.props.useNitro();            return;        }        if (e === "character") {            win(Math.random() < (accuracy / 80));        }    };})();
