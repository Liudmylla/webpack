
import css from "./index.css";
import img from './assets/js.png'
console.log('hello word')

const title = document.createElement('h1')
title.textContent = 'I love JavaScript'
const jsImg = document.createElement('img')
jsImg.className = 'js-image'
jsImg.src = img
document.body.append(title,jsImg)