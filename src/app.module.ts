import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { studentSchema } from './schema/student.schema';
import { StudentController } from './controller/student/student.controller';
import { StudentService } from './service/student/student.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017',{dbName: 'studentdb'}),
    MongooseModule.forFeature([{ name: 'Student', schema: studentSchema }])],
  controllers: [AppController, StudentController],
  providers: [AppService, StudentService],
})
export class AppModule {}


// @Module({
//     imports: [MongooseModule.forRoot('mongodb://<username>:<password>@localhost:27017',{dbName: 'studentdb'}),
//     ],
//   })
//   export class AppModule {}
