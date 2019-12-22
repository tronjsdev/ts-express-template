/* import 'express';
import * as core from "express-serve-static-core";

declare module 'express' {
  interface Request<P extends core.Params = core.ParamsDictionary> extends core.Request<P>{
    body?: any;
    session?: any;
  }
} */

declare global {
  /*
  namespace e{
    interface Response {
      body?: any;
    }
  } */
}
