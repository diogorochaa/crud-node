import { Video } from "./../entities/Video";
import { getRepository } from "typeorm";

export class GetAllVideosService {
  async execute() {
    const repo = getRepository(Video);

    const videos = await repo.find({
      relations: ["category"],
    });
    return videos;
  }
}
