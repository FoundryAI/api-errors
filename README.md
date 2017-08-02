# FoundryAI Standard API Errors

Common errors that can be thrown and caught reliably across services

## Example

```javascript
import { InternalError, NotFoundError } from '@foundry/api-errors'

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
