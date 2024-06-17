import { Request, Response, NextFunction } from 'express';

import { GetUsersController } from '@adapters/controllers/users';
import { UsersRepositoryFactory } from '../../../../../database/repositories';
import { OkResponder } from '../../../../responders/express/users';

import { Deliverer } from '../interfaces';

export default class GetUsersDeliverer extends Deliverer {
  public constructor(req: Request, res: Response, next: NextFunction) {
    super(req, res, next);
  }

  public async IndexActionJSON(): Promise<void> {
     // Tạo một đối tượng UsersRepository thông qua UsersRepositoryFactory
    const usersRepositoryFactory = new UsersRepositoryFactory();
    const usersRepository = usersRepositoryFactory.create(
      process.env.DB_DIALECT!
    );

    // Tạo một đối tượng OkResponder để xử lý khi mọi thứ diễn ra thành công
    const okResponder = new OkResponder(this.res);

    // Tạo một đối tượng GetUsersController để xử lý request
    const getUsersController = new GetUsersController(
      usersRepository,
      okResponder
    );

    // Chuyển đổi request từ HTTP thành dạng chuẩn để xử lý
    const mappedHttpRequest = this.mapHttpRequest(this.req);

    try {
      // Gọi phương thức xử lý request của controller
      await getUsersController.processRequest(mappedHttpRequest);
    } catch (err: any) {
      this.handleError(err);
    }
  }
}
