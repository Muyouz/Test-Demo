class node {
    constructor (name) {
      this.name = name
      this.nodeModules = []
    }
  }
  
  const nodeMap = new Map()
  const dataList = [
    ["A", "B"],
    ["A", "C"],
    ["A", "D"],
    ["B", "C"],
    ["B", "D"],
    ["C", "A"],
  ]
  
  dataList.forEach(([name, nodeModules]) => {
    if (!nodeMap.has(name)) {
      nodeMap.set(name, new node(name))
    }
    if (!nodeMap.has(nodeModules)) {
      nodeMap.set(nodeModules, new node(nodeModules))
    }
    let realNode = nodeMap.get(name)
    let realnodeModules = nodeMap.get(nodeModules)
    realNode.nodeModules.push(realnodeModules)
  })
  
  let hasCycle = false
  let cyclePaths = []
  
  const dfs = (node, visited, stack) => {
    visited[node.name] = true
    stack.push(node.name)

    if (node.nodeModules.length !== 0) {
        for (let newNode of node.nodeModules) {
            if (!visited[newNode.name]) {
                dfs(newNode, visited, stack)
              } else if (stack.includes(newNode.name)) {
                hasCycle = true
                cyclePaths.push(stack.slice().concat(newNode.name))
                return
              }
        }
    }
  
    stack.pop()
  }

  for (let node of nodeMap.values()) {
    let visited = {}
    let stack = []  
    dfs(node, visited, stack)
    //找到循环之后可以提前终止，也可以等到找到所有结果为止
    if (hasCycle === true) {
      break
    }
  }
  
  if (hasCycle) {
    console.log('存在循环依赖，路径为：')
    cyclePaths.forEach((cyclePath, index) => {
      console.log(`路径${index + 1}:`,cyclePath.join('->'))
    })
  } else {
    console.log('未发现循环依赖')
  }