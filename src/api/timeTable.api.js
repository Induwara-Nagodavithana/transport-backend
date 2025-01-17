const express = require('express');
const router = express.Router();
const TimeTableController = require('../controller/timeTable.controller');

module.exports = function (){
    router.get('/', TimeTableController.getAllTimeTable);
    router.post('/create', TimeTableController.createTimeTable);
    router.post('/update', TimeTableController.updateTimeTable);
    router.post('/delete',TimeTableController.deleteTimeTable);
    return router;
}
