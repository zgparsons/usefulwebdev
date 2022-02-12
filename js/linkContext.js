// Thanks: https://yihui.org/en/2018/09/target-blank/#:~:text=Albert%20Kim%20just%20discovered%20one,target%3D%22_blank%22%7D%20.

(function() {
    const links = document.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
      let link = links[i];
      if (/^(https?:)?\/\//.test(links[i].getAttribute('href'))) {
        link.target = '_blank';
        let n = link.childElementCount;
        if (n === 0 && link.innerText) {
          link.innerHTML += ' &boxbox;';
        }
      }
    }
  })();