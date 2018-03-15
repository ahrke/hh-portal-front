const options = {
  particles: {
    number: {
      value: 210,
      density: {
        enabled: true,
        value_area: 1800
      }
    }
  },
  interactivity: {
    detect_on: window,
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      }
    }
  }
}

module.exports = {
  options
}
