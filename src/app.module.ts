import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';

@Module({

  imports: [    
    MongooseModule.forRoot('mongodb+srv://masterkey:masterkey@cluster0.0fuk0.mongodb.net/?retryWrites=true&w=majority'), UserModule,
  ],

  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
