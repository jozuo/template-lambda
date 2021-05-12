import HelloWorldRepository from '../hello-world-repository'

let instance: HelloWorldRepository
beforeEach(() => {
  instance = new HelloWorldRepository()
})

describe('helloWorld()', () => {
  test('メッセージが取得できること', async () => {
    // -- exercise
    const result = await instance.helloWorld()
    // -- verify
    expect(result).toEqual('hello-world')
  })
})
