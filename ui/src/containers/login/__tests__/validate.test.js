import Immutable from 'immutable';
import validate from '../validate';

describe('Login Validation', function() {
  let validatedFields;

  beforeEach(function() {
    validatedFields = validate(Immutable.Map({fieldOne: '', fieldTwo: ''}));
  });

  it('enforces all fields to be filled', function() {
    expect(validatedFields).to.eql({
      fieldOne: 'Required',
      fieldTwo: 'Required'
    });
  });
});
