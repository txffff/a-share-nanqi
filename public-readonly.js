(()=>{
  const nativeFetch=window.fetch.bind(window);
  window.fetch=(input,init={})=>['GET','HEAD'].includes(String(init.method||'GET').toUpperCase())?nativeFetch(input,init):Promise.reject(new Error('公开页面为只读模式'));
  const lock=()=>document.querySelectorAll('#reloadBtn,#coreStockForm,#phaseSave,label:has(#phaseChoice),[data-core-delete]').forEach(el=>el.hidden=true);
  document.body.insertAdjacentHTML('afterbegin','<div class="public-readonly-notice">公开只读版 · 数据由站点所有者维护</div>');
  lock();new MutationObserver(lock).observe(document.body,{childList:true,subtree:true});
})();
