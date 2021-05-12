import HelloWorldRepository from '@/repositories/hello-world-repository'

export default class HelloWorldService {
  private readonly repository: HelloWorldRepository
  constructor() {
    this.repository = new HelloWorldRepository()
  }

  public async helloWorld(): Promise<string> {
    return this.repository.helloWorld()
  }
}
