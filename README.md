# FoundryAI Standard API Errors

[![Build Status][build-status-badge]][build-status-link]
[![Version][npm-version-badge]][npm-link]
[![License][npm-license-badge]][npm-link]

Common errors that can be thrown and caught reliably across services

## Example

```javascript
import { InternalError, NotFoundError } from '@foundry-ai/api-errors'

function doWork(callback) {
    try {
        performImpossibleTask(callback)
    } catch {
        throw new InternalError()
    }
}

function findPuppy(puppyId, callback) {
    queryForPuppy(puppyId, function(error, puppy) {
        if (!puppy) throw new NotFoundError('failed to find puppy')

        callback(puppy)
    })
}
```

## Error Classes

All Error classes can be instantiated with custom `message`s and `status`es
(given as parameters in that order), but come with sensible defaults.

| Error Class | `.message` | `.code` | `.type` |
|-------------|------------|---------|---------|
| `BadRequestError` | `'Bad Request'` | `400` | `'bad_request_error'` |
| `AuthenticationError` | `'Unauthorized'` | `401` | `'authentication_error'` |
| `ForbiddenError` | `'Forbidden'` | `403` | `'forbidden_error'` |
| `NotFoundError` | `'Not Found'` | `404` | `'not_found_error'` |
| `RateLimitError` | `'Too many requests'` | `429` | `'rate_limit_error'` |
| `InternalError` | `'Internal Server Error'` | `500` | `'internal_server_error'` |

[build-status-badge]: https://img.shields.io/travis/FoundryAI/api-errors/master.svg
[build-status-link]: https://travis-ci.org/FoundryAI/api-errors
[npm-link]: https://www.npmjs.com/package/@foundry-ai/api-errors
[npm-license-badge]: https://img.shields.io/npm/l/@foundry-ai/api-errors.svg
[npm-version-badge]: https://img.shields.io/npm/v/@foundry-ai/api-errors.svg
