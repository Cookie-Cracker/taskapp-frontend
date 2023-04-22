const { store_keys } = require('../constants/env');

module.exports = {
  getInbox: () => {
    return localStorage.getItem(store_keys._user_inbox_id);
  },
};
