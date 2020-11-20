import xx from './x.js'
import windowPng from './1.png' //

console.log(windowPng) // 4c29e74ae32d270769c4b3fb8699c83f.png  看起来是文件名，实际上得到的是路径而不是内容
let app = document.querySelector('#app');
// app.innerHTML = `<img src="${windowPng}">`

let btn = document.createElement('button')
btn.innerText = '懒加载'
document.body.appendChild(btn);
btn.onclick = () => {
    let promise = import('./lazy.js');
    promise.then((module) => {
            module.default()
        },
        () => {
            console.log('加载失败')
        })
}