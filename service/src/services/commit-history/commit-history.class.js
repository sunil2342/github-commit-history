/* eslint-disable no-unused-vars */
const axios = require('axios');

exports.CommitHistory = class CommitHistory {
  constructor (options) {
    this.options = options || {};
  }

  async find (params) {
    try {
      const response = await axios.get('https://api.github.com/repos/laravel/laravel/commits');
      return response.data;
    } catch(e) {
      return {
        success: false,
        error: e
      };
    }
  }
};
