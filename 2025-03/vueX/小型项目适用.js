import Vue from 'vue'
 
// 通过Vue.observable创建一个可响应的对象
export const store = Vue.observable({
  projectId: '', 
  
})
 
// 定义 mutations, 修改属性
export const mutations = {
  setProjectId(projectId) { 
    store.projectId = projectId; 
  }, 
} 