const { Router } = require('express');
const { getStreamers, getStreamer, saveStreamer, updateStreamer } = require('../controllers/StreamerControllers');

const router = Router()

router.get("/streamers", getStreamers);
router.get("/streamers/:streamerId", getStreamer);
router.post("/streamers", saveStreamer);
router.put("/streamers/:streamerId/vote", updateStreamer);

module.exports = router;