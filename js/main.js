// Fired.VC — minimal interactions
(function(){
  // Mobile menu
  var burger = document.getElementById('navBurger');
  var inner = burger ? burger.parentElement : null;
  if (burger && inner){
    burger.addEventListener('click', function(){
      var open = inner.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    inner.querySelectorAll('.nav__links a').forEach(function(a){
      a.addEventListener('click', function(){ inner.classList.remove('is-open'); });
    });
  }

  // Nav shadow on scroll
  var nav = document.getElementById('nav');
  if (nav){
    var onScroll = function(){
      if (window.scrollY > 8) nav.style.boxShadow = '0 12px 40px rgba(0,0,0,.4)';
      else nav.style.boxShadow = 'none';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Reveal on view
  if ('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting){
          e.target.style.opacity = 1;
          e.target.style.transform = 'translateY(0)';
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.card, .vert, .tier, .stack__layer, .timeline li').forEach(function(el){
      el.style.opacity = 0;
      el.style.transform = 'translateY(14px)';
      el.style.transition = 'opacity .6s ease, transform .6s ease';
      io.observe(el);
    });
  }
})();
