document.addEventListener('DOMContentLoaded', async () => {
  const navbar = document.createElement('nav');
  navbar.className = 'navbar is-dark';
  navbar.setAttribute('role', 'navigation');
  navbar.setAttribute('aria-label', 'main navigation');
  navbar.innerHTML = `
  <div class="navbar-brand">
    <a class="navbar-item pr-6" href="https://vmanarchyru.github.io" id="logo">
    </a>
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="glent">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="glent" class="navbar-menu is-family-sans-serif">
    <div class="navbar-start">
      <a class="navbar-item" href="list.html">Список серверов</a>
      <a class="navbar-item" href="/#networks">Наши соцсети</a>
      <!-- <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div> -->
    </div>

    <!-- <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div> -->
  </div>
  `;
  document.body.before(navbar)

  console.log(location.pathname)
  if (location.pathname == '/' || location.pathname.startsWith('/index.html')) {
    console.log('йоу :)')
    const resp = await fetch('/networks.json');
    const networks = await resp.json();
    let progress = document.querySelector('progress');
    const keys = Object.keys(networks);
    const values = Object.values(networks);
    let buttons = document.querySelector('div.buttons');
    for (let i = 0; i < keys.length; i++) {
      let button = document.createElement('a');
      button.className = 'button is-primary';
      button.href = values[i];
      button.setAttribute('target', '_blank');
      let fimg = document.createElement('figure');
      fimg.className = 'image is-32x32 is-inline-block';
      let img = document.createElement('img');
      img.src = `img/networks/${keys[i]}.png`;
      img.setAttribute('title', keys[i]);
      fimg.append(img);
      button.append(fimg);
      buttons.append(button);
    }
    progress.style.display = 'none';
  } else if (location.pathname == '/list.html') {
    console.log('ЙООООООУ =)')
    const resp = await fetch('http://gohoski.fvds.ru:5555/servers');
    const servers = await resp.json();
  }
})
