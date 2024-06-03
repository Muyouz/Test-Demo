function createVNode(tag, props, children) {
    return {
      tag, // 标签名
      props, // 属性对象
      children // 子节点列表，可以是字符串或VNode的数组
    };
  }

function render(vnode, realDom) {
    let dom = document.createElement(vnode.tag)

    if (vnode.props) {
        for (let key in vnode.props) {
            if (key === 'className') {
                dom.setAttribute('class', vnode.props[key])
            } else {
                dom.setAttribute(key, vnode.props[key])
            }
        };
    }
    if (vnode.children){
        if (typeof vnode.children === 'string') {
            dom.textContent = vnode.children
        } else {
            vnode.children.forEach(element => {
                render(element, dom)
            });
        }
    }

    realDom.appendChild(dom)

    return dom
}