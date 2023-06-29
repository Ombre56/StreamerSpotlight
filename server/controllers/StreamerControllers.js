const StreamerModel = require("../models/StreamerModel")

module.exports.getStreamers = async (req, res) => {
  const streamers = await StreamerModel.find()
  res.send(streamers)
}

module.exports.getStreamer = async (req, res) => {
  const { streamerId } = req.params
  const streamer = await StreamerModel.findById(streamerId)
  res.send(streamer)
}

module.exports.saveStreamer = (req, res) => {
  const streamerData = new StreamerModel(req.body);

  streamerData.save()
    .then(data => {
      console.log("Saved Successfully...");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });

};

module.exports.updateStreamer = async (req, res) => {
  try {
    const { streamerId } = req.params
    const streamerData = req.body

    if (streamerId && streamerData) {
      const result = await StreamerModel.findByIdAndUpdate(streamerId, streamerData);
      return res.status(200).send(result)
    }
    res.status(400).send({ error: "Streamer Not Selected...!" })
  } catch (error) {
     res.status(404).send({error: "Error While Updating the Data.."})
  }
}