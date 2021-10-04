import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://crud_api:gtzKulEIj9aHYfaS@blog.7eayp.mongodb.net/test') ,PostsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
