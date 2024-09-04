
export interface IBase {
  id: string;
  active: boolean;
  created_at: string | Date;
  updated_at?: string | Date;
  deleted_at?: string | Date;
}

export interface IValidationError {
  field: string;
  rule: string;
  message: string;
}

export interface IApiError extends Error {
  code: string;
  message: string;
}

export interface IApiResponse<T> {
  data?: T;
  validationErrors?: IValidationError[];
  error?: Error;
}

export interface IUser extends IBase {
  name: string;
  email: string;
  date_of_birth: Date | string;
  school_name: string;
  motto?: string;
}

export interface IPermission extends IBase {
  id: string;
  name: string;
  active: boolean;
  module: string;
  resource_id: string;
}

export interface IOrganization extends IBase {
  type:               string;
  name:               string;
  slug:               string;
  motto:              string;
  contactEmail:       string;
  contactPhoneNumber: string;
  website:            string;
  curriculum:         JSON;
  preferences:        JSON;
}
