import Store from 'pomotrack/store';
import DS from 'ember-data';

function inject() {
  var oldSetupContainer = DS._setupContainer;
  DS._setupContainer = function (container) {
    container.register('store:application', Store);
    return oldSetupContainer.apply(this, arguments);
  };
}

export default {
  inject: inject
};