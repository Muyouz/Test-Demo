class PubSubWithTrigger {
    constructor() {
      this.events = {}; // 用来存放所有事件类型及对应的订阅者列表
    }
  
    // 订阅事件
    subscribe(event, callback) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(callback);
    }
  
    // 发布事件
    publish(event, data) {
      if (this.events[event]) {
        this.events[event].forEach(callback => callback(data));
      } else {
        console.log(`No subscribers for event "${event}"`);
      }
    }
  
    // 取消订阅
    unsubscribe(event, callback) {
      if (this.events[event]) {
        this.events[event] = this.events[event].filter(cb => cb !== callback);
      }
    }

    // 清空所有订阅者
  clearAllSubscriptions() {
    this.events = {};
  }
  
    // 基于条件触发事件
    triggerOnCondition(conditionCallback, event, data) {
      if (typeof conditionCallback === 'function' && conditionCallback()) {
        this.publish(event, data);
      } else {
        console.log('Condition not met, event not triggered.');
      }
    }
  }
  
  // 使用示例
  const pubsub = new PubSubWithTrigger();
  
  function checkCondition() {
    // 假设这里有一些逻辑判断条件
    return true; // 根据实际情况返回true/false
  }
  
  // 订阅'alert'事件
  pubsub.subscribe('alert', data => console.log(`Alert: ${data}`));
  
  // 设置条件并尝试触发'alert'事件
  pubsub.triggerOnCondition(checkCondition, 'alert', 'Condition met, triggering alert.');
  
  // 如果checkCondition返回false，则不会触发事件
  pubsub.triggerOnCondition(() => false, 'alert', 'This won't be triggered.');