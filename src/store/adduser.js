
export default {
  namespaced: true,
  state: () => ({
    user: [
      {
        id:1,
        userId: 'abc123',
        userPw: '',
        userName: '김민지',
        userBirth: '',
        userEmail: '',
        userPhone: '01012345678',
        userGender: '여',
        join: '2022.04.01',
        userCode: '202201012'
      },
      {
        id:2,
        userId: 'asdf11',
        userPw: '',
        userName: '이민수',
        userBirth: '',
        userEmail: '',
        userPhone: '01098765432',
        userGender: '남',
        join: '2022.04.06',
        userCode: '202201013'
      }
    ]
  }),
  
  mutations: {
    updateUser(state, payload){
      state.user.push(payload)
      console.log(state.user);
    },
  },

}