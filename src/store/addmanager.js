export default {
  namespaced: true,
  state: () => ({
    manager: [
      {
        id:1,
        churchname: '여의도순복음교회',
        codenum: 202210102,
        manager: '김민지',
        loca: '인천',
        phone: '010-1234-4321',
        total: '22,221,000'
      },
      {
        id:2,
        churchname: '여의도순복음교회',
        codenum: 202210103,
        manager: '이민주',
        loca: '서울',
        phone: '010-5678-4321',
        total: '132,000,000'
      }
    ]
  }),
  mutations: {
    addManager(state, payload){
      state.manager.push(payload)
    }
  }
}