export enum UserState {
  ADMIN = 'admin',
  ACTIVE = 'active',
  SUSPENDED = 'suspended',
  PRE_VERIFICATION = 'pre-verification',
  DELETE = 'deleted'
}

export enum RequestType {
  VERIFIED = 'verified',
  UPDATE = 'update'
}

export enum UserRole {
  ADMIN = 'admin',
  CHOREOGRAPHER = 'choreographer'
}

export enum SortByType {
  ASC = 'ASC',
  DESC = 'DESC'
}
export enum SortByUserField {
  UID = 'uid',
  CREATED_AT = 'created_date',
  EMAIL = 'email',
  REQUEST = 'request',
  STATUS = 'status',
  ARTIST = 'artist_name'
}

export enum StoreContentType {
  SIGNUP = 'signup',
  LIST = 'list'
}
