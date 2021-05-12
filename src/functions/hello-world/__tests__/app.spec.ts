import { handler } from '@/functions/hello-world/app'
import HelloWorldService from '@/services/hello-world-service'
import * as rootPath from 'app-root-path'
import lambda from 'aws-lambda'
import * as fs from 'fs'
import * as path from 'path'

const event: lambda.APIGatewayEvent = JSON.parse(
  fs.readFileSync(path.join(rootPath.path, 'events', 'event.json'), 'UTF-8'),
)

let logSpy: jest.SpyInstance

beforeEach(() => {
  logSpy = jest.spyOn(console, 'log')
  logSpy.mockImplementation(log => log)
})
afterEach(() => {
  logSpy.mockRestore()
})

describe('hello-world function', () => {
  let serviceSpy: jest.SpyInstance
  beforeEach(() => {
    serviceSpy = jest.spyOn(HelloWorldService.prototype, 'helloWorld')
  })
  afterEach(() => {
    serviceSpy.mockRestore()
  })
  test('メッセージが正しく返却されること', async () => {
    // -- setup
    serviceSpy.mockImplementation(async () => Promise.resolve('hogehoge'))
    // -- exercise
    const result = await handler(event)
    // -- verify
    expect(result).toBeDefined()
    expect(result.statusCode).toBe(200)
    expect(result.body).toEqual({ message: 'hogehoge' })
    expect(serviceSpy).toHaveBeenCalledTimes(1)
  })
})
