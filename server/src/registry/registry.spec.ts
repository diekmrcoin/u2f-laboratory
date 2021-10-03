import { Registry } from './registry';

describe('Registry suite', () => {
  let registry: Registry;
  beforeAll(() => {
    registry = Registry.init();
  });

  it('Should be defined', () => {
    expect(registry).toBeDefined();
  });

  it('Should generate attestation', async() => {
    const attestation = await registry.attestation();
    expect(attestation).toBeDefined();
    console.log(attestation);
  });
});
