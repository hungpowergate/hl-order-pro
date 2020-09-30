export const getList = () => {
  return new Promise((resolve, reject) => {
    const mocks = [];
    for (let i = 0; i < 20; i++) {
      mocks.push({
        id: i.toString(),
        title: `Thong bao ${i}`
      })
    }

    resolve({
      status: 1,
      data: mocks
    })
  })
}