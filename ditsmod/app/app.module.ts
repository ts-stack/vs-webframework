import { RootModule, Router, Controller, Response, Route } from '@ditsmod/core';
import { DefaultRouter } from '@ts-stack/router';

@Controller()
export class HelloWorldController {
  constructor(private res: Response) {}

  @Route('GET', 'hello')
  tellHello() {
    this.res.send('Hello, World!');
  }
}

@RootModule({
  controllers: [HelloWorldController],
  listenOptions: { port: 3006 },
  providersPerApp: [{ provide: Router, useClass: DefaultRouter }],
})
export class AppModule {}
