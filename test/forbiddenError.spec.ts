import { suite, test } from 'mocha-typescript';
import { expect } from 'chai';

import { ForbiddenError } from '../src/forbiddenError';

@suite class ForbiddenErrorDefaults {
    public error: ForbiddenError;

    before() { this.error = new ForbiddenError(); }

    @test name() { expect(this.error.name).to.equal('ForbiddenError'); }
    @test type() { expect(this.error.type).to.equal('forbidden_error'); }
    @test message() { expect(this.error.message).to.equal('Forbidden'); }
    @test status() { expect(this.error.status).to.equal(403); }
}

@suite class ForbiddenErrorCustom {
    public error: ForbiddenError;

    before() { this.error = new ForbiddenError('custom message', 999); }

    @test name() { expect(this.error.name).to.equal('ForbiddenError'); }
    @test type() { expect(this.error.type).to.equal('forbidden_error'); }
    @test message() { expect(this.error.message).to.equal('custom message'); }
    @test status() { expect(this.error.status).to.equal(999); }
}
