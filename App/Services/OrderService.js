export const getList = (size) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const mocks = [];
      for (let i = size; i < (5 + size); i++) {
        mocks.push({
          id: i.toString(),
          image: 'werwe',
          name: `Túi Channel - black ${i}`,
          prices: '$58.00',
          status: 'Chờ duyệt',
          createdAt: '20/10/2020',
          isPay: 'Thanh toán'
        })
      }

      resolve(mocks);
    }, 1000)
  })
}