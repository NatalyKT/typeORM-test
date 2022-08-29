import { AppDataSource } from "./data-source"
import { Photo } from "./entity/Photo"
import { PhotoMetadata } from "./entity/PhotoMetadata"

AppDataSource.initialize()
    .then(async () => {
/*
        const photo = new Photo()
        photo.name = "Me and Bears"
        photo.description = "I am near polar bears"
        photo.filename = "photo-with-bears.jpg"
        photo.isPublished = true

        const metadata = new PhotoMetadata()
        metadata.height = 640
        metadata.width = 480
        metadata.compressed = true
        metadata.comment = "cybershoot"
        metadata.orientation = "portrait"

        photo.metadata = metadata // this way we connect them

        const photoRepository = AppDataSource.getRepository(Photo)

        await photoRepository.save(photo)

        console.log("Photo is saved, photo metadata is saved too.")*/
    })
    .catch((error) => console.log(error))
