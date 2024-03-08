export enum METHOD {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

export interface CommonResData {
  /**
   * api정의가 이상함
   */
  status: "success" | false;
}
