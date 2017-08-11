import { suite, test } from 'mocha-typescript';
import { expect } from 'chai';

import { BadRequestError } from '../src/badRequestError';

@suite class BadRequestErrorDefaults {
    public error: BadRequestError;

    before() { this.error = new BadRequestError(); }

    @test name() { expect(this.error.name).to.equal('BadRequestError'); }
    @test type() { expect(this.error.type).to.equal('bad_request_error'); }
    @test message() { expect(this.error.message).to.equal('Bad Request'); }
    @test status() { expect(this.error.status).to.equal(400); }
}

@suite class BadRequestErrorCustom {
    public error: BadRequestError;

    before() { this.error = new BadRequestError('custom message', 999); }

    @test name() { expect(this.error.name).to.equal('BadRequestError'); }
    @test type() { expect(this.error.type).to.equal('bad_request_error'); }
    @test message() { expect(this.error.message).to.equal('custom message'); }
    @test status() { expect(this.error.status).to.equal(999); }
}
