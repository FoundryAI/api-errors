import { suite, test } from 'mocha-typescript';
import { expect } from 'chai';

import { NotFoundError } from '../src/notFoundError';

@suite class NotFoundErrorDefaults {
    public error: NotFoundError;

    before() { this.error = new NotFoundError(); }

    @test name() { expect(this.error.name).to.equal('NotFoundError'); }
    @test type() { expect(this.error.type).to.equal('not_found_error'); }
    @test message() { expect(this.error.message).to.equal('Not Found'); }
    @test status() { expect(this.error.status).to.equal(404); }
}

@suite class NotFoundErrorCustom {
    public error: NotFoundError;

    before() { this.error = new NotFoundError('custom message', 999); }

    @test name() { expect(this.error.name).to.equal('NotFoundError'); }
    @test type() { expect(this.error.type).to.equal('not_found_error'); }
    @test message() { expect(this.error.message).to.equal('custom message'); }
    @test status() { expect(this.error.status).to.equal(999); }
}
