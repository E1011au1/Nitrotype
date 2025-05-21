function loadScript(u,c,e){var s=document.createElement('script');s.src=u;s.onload=c;s.onerror=e;(document.head||document.documentElement).appendChild(s);}

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
