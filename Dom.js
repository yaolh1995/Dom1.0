console.log('2');
//window.dom 
window.dom = {
    //此处不需要括号？
    //window.dom.create(){}
    //dom.create=function(){}
    //create(tagName) {
    create(String) {
        //return document.createElement(tagName);
        //template可以容纳各种元素
        //里面的元素不能通过children拿到
        const container = document.createElement("template")
        container.innerHTML = String.trim();
        //字符串要trim以下，清除两边的没空格
        return container.content.firstChild;
    }, //这里要有一个逗号？
    //节点后面创建一个节点
    after(node, node2) {
        //Dom只有insertbefore，只能找到他的下一个元素，插在下一个元素的前面；
        node.parentNode.insertBefore(node2, node.nextSibling);
        //如果是最后一个节点，没有nextsibling；但是这个代码也能生效；
    },
    before(node, node2) {
        node.parentNode.insertBefore(node2, node);
    },
    //生个儿子
    append(parent, node) {
        parent.appendChild(node)
    },
    wrap(node, parent) {
        /*  自己写的，也OK      node.parentNode.appendChild(parent)
                parent.appendChild(node)
                console.log(node)
                console.log(parent) */
        dom.before(node, parent)
        dom.append(parent, node)

    },
    //以下为删除
    remove(node) {
        //兼容IE的节点
        node.parentNode.removeChild(node)
        return node //返回一个节点的引用
    },
    empty(node) {
        //方法一，儿子一个个调用再删除
        //方法二，inner.Html='';但儿子就不能引用了；
        const {
            childNodes
        } = node
        //上面的是ES6新语法   const childNodes=node.childNodes
        //不能用for循环,因为删除后数组长度会变化
        const array = []
        let x = node.firstChild
        while (x) {
            array.push(dom.remove(node.firstChild))
            x = node.firstChild
        } //remove到他没有儿子
    },

    attr(node, name, value) {
        //重载 3个参数的时候，2个参数的时候
        if (arguments.length === 3) {
            node.setAttribute(name, value)
        } else if (arguments.length === 2) {
            return node.getAttribute(name) //如果要获取就要返回
            //console.log（`tile:${title}`）
        }
    },

    text(node, string) {
        //适配
        if (arguments.length === 2) {
            if ('innerText' in node) {
                node.innerText = string //ie
                /*         node.textContent=string//firfox/Chrome*/
            } else {
                node.textContent = string
            }
        } else if (arguments.length === 1) {
            if ('innerText' in node) {
                return node.innerText
            } else {
                return node.textContent
            }
        }
    },

    html(node, string) {
        if (arguments.length === 2) { //重载
            node.innerHTML = string
            console.log('html')
        } else if (arguments.length === 1) {
            return node.innerHTML
        }
    }, //不是很明白有啥用
    style(node, name, value) {
        if (arguments.length === 3) {
            node.style[name] = value
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                return node.style[name]
            } else if (name instanceof Object) {
                const object = name
                for (let key in object) {
                    node.style[key] = object[key]
                    //key:border/color
                    //node.style.border=...
                    //node.style.color=...
                    /* node.style.key就错了，若这样引用是返回字符串 
                    而此处应该是返回变量key*/
                }}}},
//dom.class.add
    class:{
        add(node,className){
            node.classList.add(className)
        },
        remove(node,className){
            node.classList.remove(className)
        },
        has(node,className){//classList文档,是否存在某值
        return  node.classList.contains(className)
        //此处必须要return；检查类的都要return，若是修改变量则不一定需要return
            }
        },
        on(node,eventName,fn){
            node.addEventListener(eventName,fn)
        },
        off(node,eventName,fn){
            node.removeEventListener(eventName,fn)
        },
        //以上为改的
         //查
        find(selector,scope){
            return (scope||document).querySelectorAll(selector)
        //如果没有scope就直接取document，获取nodelist
        },
        parent(node){
            return node.parentNode
        },
        children(node){
            return node.children
        },
        siblings(node){
            //filter需要把伪数组转换成数组
          return  Array.from(node.parentNode.children)
            .filter(n=>n!==node)//排除掉自己的兄弟姐妹
        },
        next(node){
            let x=node.nextSiblings
            //1为标签，3为文本，当节点不是文本时return  
            while(x&&x.nodeType===3){
                x=x.nextSiblings
            }
            return x
        },
        previous(node){
            let x=node.previousSiblings
            //1为标签，3为文本，当节点不是文本时return  
            while(x&&x.nodeType===3){
                x=x.previousSiblings
            }
            return x
        },
        each(nodeList,fn){
            for(let i=0;i<nodeList.length;i++){
                fn.call(null,nodeList[i])
            }

        },
        index(node){
            const list=dom.children(node.parentNode)
            let i //需要再此处先声明变量，否则i只在for内有效
            console.log(list)
            for(i=0;i<list.length;i++){
                if(list[i]===node){
                    break
                }
                return i
            }

        }

    };