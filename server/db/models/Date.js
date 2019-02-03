const bookshelf = require('./bookshelf');

class Date extends bookshelf.Model {
  get tableName() {
    return 'dates';
  }

  get hasTimestamps() {
    return false;
  }

  appointments() {
    return this.hasMany('Appointment', 'date_id');
  }
}

module.exports = bookshelf.model('Date', Date);
