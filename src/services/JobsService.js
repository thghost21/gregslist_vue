import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Job } from "@/models/Job.js"
import { AppState } from "@/AppState.js"

class JobsService {
  async getJobs() {
    const response = await api.get('api/jobs')
    logger.log('got jobs', response.data)
    const jobs = response.data.map(pojo => new Job(pojo))
    AppState.jobs = jobs
    logger.log(AppState.jobs)
  }

}
export const jobsService = new JobsService()