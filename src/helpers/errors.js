class CastomsError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class ValidationError extends CastomsError {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class ClientError extends CastomsError {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class NotAuthorizedError extends CastomsError {
  constructor(message) {
    super(message);
    this.status = 401;
  }
}

class QueryError extends CastomsError {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

module.exports = {
  CastomsError,
  ValidationError,
  ClientError,
  NotAuthorizedError,
  QueryError,
};
