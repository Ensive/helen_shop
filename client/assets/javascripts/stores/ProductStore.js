import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';
import AppConstants from '../AppConstants';

class ProductEventEmitter extends EventEmitter {
  constructor() {
    super();
  }
  
  addProduct(product) {
    console.log('Product was added: ', product);
  }

  addChangeListener(callback) {
    this.on(AppConstants.CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(AppConstants.CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(AppConstants.CHANGE_EVENT);
  }
  
}

let ProductStore = new ProductEventEmitter();

AppDispatcher.register((payload) => {
  switch (payload.actionType) {
    case AppConstants.ADD_PRODUCT_TO_CART:
      ProductStore.addProduct(payload.product);
      ProductStore.emitChange();
      break;
    default:
    // NO-OP
  }
  
});

export default ProductStore;
