import { AttestationResult, ExpectedAttestationResult, Fido2Lib } from 'fido2-lib';

export class Registry {
  constructor(private f2l: Fido2Lib) {
  }

  static init(): Registry {
    return new Registry(new Fido2Lib());
  }

  async attestation() {
    return this.f2l.attestationOptions();
  }

  async attestationRegistration(clientAtt: AttestationResult, expectations: ExpectedAttestationResult) {
    return this.f2l.attestationResult(clientAtt, expectations);
  }
}
