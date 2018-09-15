import "reflect-metadata"; 
import { ApiServer } from "./server/index"; 
import { DatabaseProvider } from "./database/index"


DatabaseProvider.configure({
  type: process.env.DATABASE_TYPE as any || 'postgres',
  database: process.env.DATABASE_NAME || 'type-node',
  username: process.env.DATABASE_USERNAME || 'meesam',
  password:process.env.DATABASE_PASSWORD || 'meesam',
  host: process.env.DATABASE_HOST || '127.0.0.1',
  port:  5432,
  ssl: !!process.env.DATABASE_SSL,
})
const server = new ApiServer();
server.start( 8080);