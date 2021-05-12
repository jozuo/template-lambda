import HelloWorldService from '@/services/hello-world-service'
import Log from '@dazn/lambda-powertools-logger'
import wrap from '@dazn/lambda-powertools-pattern-basic'
import lambda from 'aws-lambda'

const service = new HelloWorldService()

interface Response {
  statusCode: number
  body: { message: string }
}

export const handler = wrap(
  async (event: lambda.APIGatewayEvent): Promise<Response> => {
    Log.info(JSON.stringify(event))
    const message = await service.helloWorld()

    return {
      statusCode: 200,
      body: { message: message },
    }
  },
)
