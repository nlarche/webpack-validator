import validate from '../../src/index'

/**
 * For all supplied configs (array of objects), check that they are valid given a schema.
 */
export default (configs, schema) => {
  configs.forEach((validConfig, n) => {
    it(`valid #${n} should be valid`, () => {
      const result = validate(validConfig, schema, { returnValidation: true })
      assert(result.error === null)
    })
  })
}
