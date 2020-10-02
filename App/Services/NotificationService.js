export const getList = (size) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const mocks = [];
      for (let i = size; i < (20 + size); i++) {
        mocks.push({
          id: i.toString(),
          title: `Thong bao ${i}`
        })
      }

      resolve(mocks);
    }, 1000)
  })
}