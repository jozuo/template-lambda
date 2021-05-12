import HelloWorldRepository from '@/repositories/hello-world-repository'
import HelloWorldService from '../hello-world-service'

let instance: HelloWorldService
beforeEach(() => {
  instance = new HelloWorldService()
})

describe('helloWorld()', () => {
  let repositorySpy: jest.SpyInstance
  beforeEach(() => {
    repositorySpy = jest.spyOn(HelloWorldRepository.prototype, 'helloWorld')
  })
  afterEach(() => {
    repositorySpy.mockRestore()
  })

  test('メッセージが返却されること', async () => {
    // -- setup
    repositorySpy.mockImplementation(async () => Promise.resolve('hogehoge'))
    // -- exercise
    const result = await instance.helloWorld()
    // -- verify
    expect(result).toEqual('hogehoge')
    expect(repositorySpy).toHaveBeenCalledTimes(1)
  })
})
