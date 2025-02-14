import { Request, Response, NextFunction } from 'express';
import createHttpError, { HttpError } from 'http-errors'; // Xử lý lỗi, tạo lỗi express

import * as constants from '@config/constants';
import { IHttpRequestModel } from '@adapters/controllers/interfaces';

export default abstract class Deliverer {
    protected req: Request;
    protected res: Response;
    protected next: NextFunction;

    public constructor(req: Request, res: Response, next: NextFunction) {
        this.req = req;
        this.res = res;
        this.next = next;
    }

    // Phương triển triển khai trong lớp con
    // Dùng khai báo (declaration) mà không có định nghĩa (implementation)
    public abstract IndexActionJSON(): Promise<void>;

    protected mapHttpRequest(req: Request): IHttpRequestModel {
        return {
          query: req.query,
          params: req.params,
          body: req.body,
          headers: req.headers
        };
      }

    protected handleError(err: any): void {
        if (err.isFailure) {
          const httpError = this.httpErrorFactory(err.getError());
          this.next(httpError);
          return;
        }
        this.next(err);
    }

    private httpErrorFactory(unknownError: any): HttpError {
        if (unknownError.statusCode) return unknownError;
    
        if (unknownError.code == null) return createHttpError(500, unknownError);
    
        const httpErrorCreatorByCode: Record<string, () => HttpError> = {
          [constants.ERR_VALIDATION]: () => createHttpError(400, unknownError),
          [constants.ERR_VALUE_NOT_FOUND]: () => createHttpError(404, unknownError)
        };
    
        if (httpErrorCreatorByCode[unknownError.code] == null) return unknownError;
    
        const createError = httpErrorCreatorByCode[unknownError.code];
    
        return createError();
    }
}