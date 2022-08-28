import { Request, Response } from 'express';
import { fail } from '@modules/response.module';
import status from '@modules/status.module';
import crawlingService from '@modules/crawling.module';

const getInflearn = async (req: Request, res: Response) => {
  try {
    const result = await crawlingService.parsing(req);

    if (result instanceof Error) {
      throw result;
    }

    return res.status(status.OK).send(result);
  } catch (error: any) {
    return res
      .status(error.statusCode)
      .send(fail(error.statusCode, error.message));
  }
};

export default {
  getAllHoliday,
};
