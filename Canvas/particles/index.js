const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

const mouse = {
  x: undefined,
  y: undefined,
};

const MAX_RADIUS = 40;
const SPREAD = 100;
const colorArray = ["#F2385A", "#F5A503", "#E9F1DF", "#4AD9D9", "#36B1BF"];

canvas.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener("resize", (event) => {
  canvas.height = event.target.innerHeight;
  canvas.width = event.target.innerWidth;

  init();
});

class Particle {
  constructor(x, y, radius, xSpeed, ySpeed) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.minRadius = radius;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  update() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.xSpeed = -this.xSpeed;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.ySpeed = -this.ySpeed;
    }
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (
      mouse.x - this.x < SPREAD &&
      mouse.x - this.x > -SPREAD &&
      mouse.y - this.y < SPREAD &&
      mouse.y - this.y > -SPREAD &&
      this.radius < MAX_RADIUS
    ) {
      this.radius += 1;
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }
  }
}

const particles = [];

const init = () => {
  particles.length = 0; // reset the array so that new particles are generated
  for (let i = 0; i < 800; i++) {
    const radius = Math.random() * 4 + 1;
    const x = Math.random() * (window.innerWidth - radius * 2) + radius;
    const y = Math.random() * (window.innerHeight - radius * 2) + radius;
    const xSpeed = Math.random() - 0.5;
    const ySpeed = Math.random() - 0.5;
    const particle = new Particle(x, y, radius, xSpeed, ySpeed);
    particles.push(particle);
  }
  console.log(particles.length);
};

const animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  particles.forEach((circle) => {
    circle.draw();
    circle.update();
  });
};

init();
animate();
