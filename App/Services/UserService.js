const login = (user) => {
  return new Promise((resolve, reject) => {
    resolve({
      status: 1,
      data: {
        token: '123456',
        user: {
          username: 'Nguyễn Thành Trung'
        }
      }
    })
  })
}

const logout = () => {

}

export {
  login,
  logout
}