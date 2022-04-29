import { Module } from '@nestjs/common';
import { MongoClient, Db } from 'mongodb';

@Module({
    providers: [
        {
            provide: 'DATABASE_CONNECTION',
            useFactory: async (): Promise<Db> => {
                try {
                    const client = await MongoClient.connect(`mongodb://localhost:27017`, {
                    });

                    const db = client.db('onlineShop');
                    const answer = db.collection('users').aggregate(

                    ).toArray().then((data) => {
                        console.log(`data`, data);
                    });
                    console.log(`answer`, answer);

                    return db;
                } catch (e) {
                    throw e;
                }
            }
        },
    ],
    exports: ['DATABASE_CONNECTION'],
})
export class DatabaseModule { }