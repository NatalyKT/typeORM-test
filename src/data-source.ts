import "reflect-metadata"
import { DataSource } from "typeorm"
import { Author } from "./entity/Author"
import { Photo } from "./entity/Photo"
import { PhotoMetadata } from "./entity/PhotoMetadata"
import { Album } from "./entity/Album"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "typeorm",
    synchronize: true,
    logging: false,
    entities: [Photo, PhotoMetadata, Author, Album],
    migrations: [],
    subscribers: [],
})