/* const div=dom.create("div"); *///括号内为字符串
const div2=dom.create("<div>div2</div>")
const div3=dom.create("<div id='parent'>div3</div>")
dom.wrap(div2,div3)//把div2放在div3里面
dom.wrap(div66,div3)//把div66放在div3里
dom.attr(div66,'title','Hi,I am Yao')//attribute修改标签
dom.attr(div66,'HI，I am Yao')
dom.text(div3,'我在写东西啦，写好多好多东西啦')
dom.html(div3,'我又在写')
dom.style(div3,{border:'1px soild red',color:'blue'})
dom.style(div3,'border')
dom.style(div3,'border','1px soild red')
dom.class.add(div3,'blue')
dom.class.add(div3,'red')
dom.class.remove(div3,'blue')
console.log(dom.class.has(div3,'blue'))
const fn=()=>(
    console.log('陌挨老子'))
dom.on(div3,'click',fn)
dom.off(div3,'click',fn)
const testDiv=dom.find('#div3')[0]
//console.log(dom.find('.red',testDiv)[0])
//获取到的元素为多个节点的list[0],选择第一个
/* console.log(dom.siblings(siblings))
console.log(dom.children(siblings)) */
const t=dom.find('#travel')[0]//获取t的时候加0
dom.each(dom.children(t),()=>dom.style(travel,'color','red'))
console.log(dom.index(t2))