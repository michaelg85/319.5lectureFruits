import express from 'express';
import Fruit from '../models/fruitSchema.mjs';

const router = express.Router();

// Create
router.post('/', async (req, res) => {
  try {
    // Create variable to cache new  fruit in
    let newFruit = new Fruit(req.body);

    // Save to DB and add _id to what we will return
    await newFruit.save();

    // Send new doc too client
    res.json(newFruit);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
});

// Read
// find all route
router.get('/', async (req, res) => {
  try {
    // create variable to cache fruits and save all
    let allFruits = await Fruit.find({})

    //resond to client
    res.json(allFruits)
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
});

// Update
router.put('/:id', async (req, res) => {
  try {
    let updatedFruit = await Fruit.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.json(updatedFruit)

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  try {
    let deletedFruit = await Fruit.findByIdAndDelete(req.params.id)

    res.json(deletedFruit)
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
});

export default router;