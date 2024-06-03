/*
用js手写实现一个html解析器
如：<div>hhh<p></p></div>
解析成：
{
    tag: 'div',
    content: 'hhh',
    children: [{
        tag: 'p',
        content: '',
        children: []
    }]
}
*/
function myHtmlParser(html) {
    const TAG_REGEX = /(<\/?[a-zA-Z0-9]+[^>]*>)|([^<]+)/g;

    let baseNode = {
        tag: '',
        content: '',
        children: []
    };
    let tagStack = [];
    let tagNums = []

    // 分割字符串为标签和文本内容
    let match = '';
    let parts = [];
    while ((match = TAG_REGEX.exec(html)) !== null) {
        if (match[0]) {
            match[0] = match[0].trim();
            parts.push(match[0]);
        } 
    }

    

    //从标签字符串中提取标签的tag名
    function parseTag(part) {
        const tagRegex = /<(\/?[a-zA-Z0-9]+)[^>]*>/g;
        let match = tagRegex.exec(part);
        return match ? (match[1].startsWith('/') ? match[1].slice(1) : match[1]) : null;
    }

    //深层赋值
    function setDeepValue(obj, pathDeep) {
        let current = obj;

        for (let i = 1; i <= pathDeep; i++) {
            if (current.children) {
                if (current.children[tagNums[i] - 1]) {
                  current = current.children[tagNums[i] - 1];
                } else {
                  current.children[tagNums[i] - 1] = {
                    tag: '',
                    content: '',
                    children: []
                  }
                  current = current.children[tagNums[i] - 1]
                }
            } else {
                current = {
                    tag: '',
                    content: '',
                    children: []
                }
            }
        }

        return current;
    }

    for (let part of parts) {
        if (part.startsWith('</')) {
            // 处理结束标签
            let tagName = parseTag(part)
            let stackTag = tagStack.pop();
            if (stackTag !== tagName) {
                console.log('字符串异常，不能形成正常的html对象结构')
                return;
            }
        } else if (part.startsWith('<')) {
            // 处理开始标签
            let tagName = parseTag(part)
            tagStack.push(tagName);
            if (!tagNums[tagStack.length-1]) {             
                tagNums[tagStack.length-1] = 1
            } else {
                tagNums[tagStack.length-1]++
            }
            let currentNode = setDeepValue(baseNode, tagStack.length-1)
            currentNode.tag = tagName
        } else {
            //处理文本
            let currentNode = setDeepValue(baseNode, tagStack.length-1)
            currentNode.content += part
        }
    }
    return baseNode
}

// 测试
let html = '<div>hhh<p>test</p><span>123</span>7</div>';
console.log(myHtmlParser(html));