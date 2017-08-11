import { suite, test } from 'mocha-typescript';
import { expect } from 'chai';

import { ConflictError } from '../src/conflictError';

@suite class ConflictErrorDefaults {
    public error: ConflictError;

    before() { this.error = new ConflictError(); }

    @test name() { expect(this.error.name).to.equal('ConflictError'); }
    @test type() { expect(this.error.type).to.equal('conflict_error'); }
    @test message() { expect(this.error.message).to.equal('Conflict'); }
    @test status() { expect(this.error.status).to.equal(409); }
}

@suite class ConflictErrorCustom {
    public error: ConflictError;

    before() { this.error = new ConflictError('custom message', 999); }

    @test name() { expect(this.error.name).to.equal('ConflictError'); }
    @test type() { expect(this.error.type).to.equal('conflict_error'); }
    @test message() { expect(this.error.message).to.equal('custom message'); }
    @test status() { expect(this.error.status).to.equal(999); }
}
