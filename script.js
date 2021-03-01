'use strict'

const spacing = document.getElementById('spacing');
const blurrange = document.getElementById('blurrange');
const color = document.getElementById('color');
const spanId = document.getElementById('span');
const img = document.querySelector('img');

spacing.addEventListener('mousemove', function () {
  let spacingValues = [];
  spacingValues = spacing.value
  img.style.padding = `${spacingValues}px ${spacingValues}px`;
});

blurrange.addEventListener('mousemove', function () {
  let blurrangeValue = [];
  blurrangeValue = blurrange.value;
  img.style.filter = `blur(${blurrangeValue}px)`;
});

color.addEventListener('input', function () {
  let colorValues = [];
  colorValues = color.value;
  img.style.borderColor = `${colorValues}`;
  spanId.style.color = `${colorValues}`;
});