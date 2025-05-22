(function(){
  function loadScript(url, onload, onerror) {
    var script = document.createElement('script');
    script.src = url;
    script.onload = onload;
    script.onerror = onerror;
    (document.head || document.documentElement).appendChild(script);
  }

  function showAlert() {
    // Double-check Swal exists
    if (typeof Swal !== 'undefined') {
      Swal.fire({
        icon: 'warning',
        title: 'Full credits to eason.',
        text: '\u26A0\u26A0\u26A0 I AM NOT RESPONSIBLE FOR YOUR ACC GETTING BANNED \u26A0\u26A0\u26A0'
      });
    } else {
      console.error('SweetAlert2 loaded, but Swal is not defined.');
    }
  }

  // Use .all.min.js which includes all required modules
  if (typeof Swal === 'undefined') {
    loadScript('https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.all.min.js', function() {
      // Ensure it's available before calling
      setTimeout(showAlert, 50); // small delay to ensure script is fully parsed
    }, function() {
      console.error('Failed to load SweetAlert2.');
    });
  } else {
    showAlert();
  }

  // Rest of your code (unchanged)
  var win,
      accuracy = 80,
      t = Object.values(document.querySelector("div.dash-copyContainer"))[1].children._owner.stateNode;
  win = function(r) {
    t.handleKeyPress(
      "character",
      new KeyboardEvent("keypress", { key: r ? t.props.lessonContent[t.typedIndex] : "$" })
    );
  };
  var m = t.input.keyHandler;
  t.input.keyHandler = function(e, n) {
    if (n.key === "\n") {
      t.props.useNitro();
      return;
    }
    if (e === "character") {
      win(Math.random() < (accuracy / 80));
    }
  };
})();
