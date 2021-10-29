const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();

//app.get('/api/v1/tours', getAllTours)
//app.post('/api/v1/tours', postTour )
// app.get('/api/v1/tours/:id', getTour)
// app.patch('/api/v1/tours/:id', patchTour)
// app.delete('/api/v1/tours/:id', deleteTour)

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
