import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('task', 'Task', {
  // Specify the other units that are required for this test.
  needs: ['model:client', 'model:project', 'model:log-entry']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
