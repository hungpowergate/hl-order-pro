export const getList = (size) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const mocks = [];
      for (let i = size; i < (20 + size); i++) {
        mocks.push({
          id: i.toString(),
          title: `Item ${i}`,
          detail: 'thanh toan abc',
          createdAt: '20/10/2020',
          money: '2500000'
        })
      }

      resolve(mocks);
    }, 1000)
  })
}