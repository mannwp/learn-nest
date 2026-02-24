import { Body, Controller, Get, Post, Query, Redirect } from '@nestjs/common';

@Controller('cat')
export class CatController {
  @Get()
  findAll() {
    return 'JSON.stringify(req.body)';
  }
  @Get('abc/*')
  find() {
    return 'this is wildcard';
  }
  @Get('redirect')
  @Redirect('https://nestjs.com', 301)
  redirect() {}

  @Get('/docs')
  @Redirect('https://docs.nestjs.com', 302)
  redirectDocs(@Query('v') v: string) {
    return { url: `https://nextjs.org/docs/${v}`, statusCode: 302 };
  }

  @Post()
  create(@Body('name') name: string) {
    return `this is ${name.toUpperCase()}`;
  }
}
