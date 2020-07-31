window.dom = {
    find(selector) {
        return (document.querySelectorAll(selector))
    },
    style(node, name, value) {
        node.style[name] = value //此处的name为变量；border、background等等
    },
    each(divlist, fn) {
        for (let i = 0; i < divlist.length; i++) {
            fn.call(null, divlist[i])
        }
        return
    }
}
const div = dom.find('#test>.red')[0]
console.log(' 获取对应的元素+设置 div.style.color');
console.log( div);
console.log('-----');
dom.style(div, 'color', 'red')
// 设置 div.style.color
const divList = dom.find('.red') // 获取多个 div.red 元素
console.log(' 获取多个 div.red 元素');
console.log(divList)
console.log('-----');
console.log('遍历 divList 里的所有元素')
dom.each(divList, (n)=> console.log(n))
// 遍历 divList 里的所有元素