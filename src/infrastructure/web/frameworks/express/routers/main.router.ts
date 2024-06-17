import RouterMaker from './interfaces/router.abstract';

import { UsersRouter } from './users';


export default class MainRouter extends RouterMaker {
  public constructor() {
    super();
    this.initRoutes();
  }

  private initRoutes(): void {
    this._router.use('/users', new UsersRouter().getRouter());
  }
}
