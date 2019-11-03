//comments, views, clock
document.querySelectorAll('.food')
  .forEach(function(el){ 
    el.onclick = function() {
      var cnt = this.closest('div').querySelector('.cnt');
      cnt.innerText = parseInt(cnt.innerText, 10)+1;
    }
  });
