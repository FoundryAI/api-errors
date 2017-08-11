import { suite, test } from 'mocha-typescript';
import { expect } from 'chai';

import { AuthenticationError } from './authenticationError';

@suite class AuthenticationErrorDefaults {
    public error: AuthenticationError;

    before() { this.error = new AuthenticationError(); }

    @test name() { expect(this.error.name).to.equal('AuthenticationError'); }
    @test type() { expect(this.error.type).to.equal('authentication_error'); }
    @test message() { expect(this.error.message).to.equal('Unauthorized'); }
    @test status() { expect(this.error.status).to.equal(401); }
}

@suite class AuthenticationErrorCustom {
    public error: AuthenticationError;

    before() { this.error = new AuthenticationError('custom message', 999); }

    @test name() { expect(this.error.name).to.equal('AuthenticationError'); }
    @test type() { expect(this.error.type).to.equal('authentication_error'); }
    @test message() { expect(this.error.message).to.equal('custom message'); }
    @test status() { expect(this.error.status).to.equal(999); }
}
