import { suite, test } from 'mocha-typescript';
import { expect } from 'chai';

import { InternalError } from './internalError';

@suite class InternalErrorDefaults {
    public error: InternalError;

    before() { this.error = new InternalError(); }

    @test name() { expect(this.error.name).to.equal('InternalError'); }
    @test type() { expect(this.error.type).to.equal('internal_error'); }
    @test message() { expect(this.error.message).to.equal('Internal Server Error'); }
    @test status() { expect(this.error.status).to.equal(500); }
}

@suite class InternalErrorCustom {
    public error: InternalError;

    before() { this.error = new InternalError('custom message', 999); }

    @test name() { expect(this.error.name).to.equal('InternalError'); }
    @test type() { expect(this.error.type).to.equal('internal_error'); }
    @test message() { expect(this.error.message).to.equal('custom message'); }
    @test status() { expect(this.error.status).to.equal(999); }
}
