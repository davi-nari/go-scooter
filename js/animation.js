function onEntry(entry) {
    entry.forEach(change => {
    
        if (change.isIntersecting) {
       change.target.classList.add('e-show');
      } 
      else {
        change.target.classList.remove('e-show')
      }
    });
  }
  
  let options  = {threshold: [0.5]};
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.e-anim');
  
  for (let elm of elements) {
    observer.observe(elm);
  }

  
  let images = document.querySelectorAll('.slider-bg');
  let current = 0
  
  function slider() {
    for (let i = 0; i < images.length; i++) {
      images[i].classList.add('s-bg-op0')
    }
    images[current].classList.remove('s-bg-op0')
  }
  slider()
  document.querySelector('.prev').onclick = function () {
    if(current - 1 == -1){
      current = images.length - 1
    } else{
      current--
    }
    slider()
  };
  document.querySelector('.next').onclick = function () {
    if(current + 1 == images.length){
      current = 0
    } else{
      current++
    }
    slider()
  };
  