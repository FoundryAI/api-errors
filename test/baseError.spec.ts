import { suite, test } from 'mocha-typescript';
import { expect } from 'chai';

import { BaseError } from '../src/baseError';

@suite class BaseErrorDefaults {
    public error: BaseError;

    before() { this.error = new BaseError('message', 123, 'base_error'); }

    @test name() { expect(this.error.name).to.equal('Error'); }
    @test type() { expect(this.error.type).to.equal('base_error'); }
    @test message() { expect(this.error.message).to.equal('message'); }
    @test status() { expect(this.error.status).to.equal(123); }
}
