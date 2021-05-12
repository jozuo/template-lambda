export default class HelloWorldRepository {
  public async helloWorld(): Promise<string> {
    return new Promise((resolve, reject) => {
      resolve('hello-world')
    })
  }
}
