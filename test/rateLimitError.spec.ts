import { suite, test } from 'mocha-typescript';
import { expect } from 'chai';

import { RateLimitError } from '../src/rateLimitError';

@suite class RateLimitErrorDefaults {
    public error: RateLimitError;

    before() { this.error = new RateLimitError(); }

    @test name() { expect(this.error.name).to.equal('RateLimitError'); }
    @test type() { expect(this.error.type).to.equal('rate_limit_error'); }
    @test message() { expect(this.error.message).to.equal('Too many requests'); }
    @test status() { expect(this.error.status).to.equal(429); }
}

@suite class RateLimitErrorCustom {
    public error: RateLimitError;

    before() { this.error = new RateLimitError('custom message', 999); }

    @test name() { expect(this.error.name).to.equal('RateLimitError'); }
    @test type() { expect(this.error.type).to.equal('rate_limit_error'); }
    @test message() { expect(this.error.message).to.equal('custom message'); }
    @test status() { expect(this.error.status).to.equal(999); }
}
