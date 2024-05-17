const testModel = require("../model/userModel");
const postFunction = async (req, res) => {
  console.log("test");
  try {
    const data = {
      ...req.body,
    };
    console.log(data);
    const Success = await testModel.create(data);
    console.log(Success);
    res.json({
      data: data,
      message: "Success",
    });
  } catch (err) {
    res.json({
      Error: err.message,
    });
    console.log(err);
  }
};

//get

const getRequest = async (req, res) => {
  try {
    const data = {
      ...req.body,
    };

    const test = await testModel.find(data);
    res.json({
      data: test,
      message: "Success ",
    });
  } catch (err) {
    res.json({
      Error: err.message,
    });
  }
};

//update

const update = async (req, res) => {
  try {
    const data = {
      ...req.body,
    };

    const success = await testModel.findOne(data);

    const update = await testModel.updateOne(data, {
      $set: { username: "venichlm" },
    });
    res.json({
      data: update,
      message: "Updated successfully",
    });
  } catch (err) {
    res.json({
      Error: err.message,
    });
  }
};

//delete
const deleteReq = async (req, res) => {
  try {
    const id = req.params.id;

    const success = await testModel.deleteOne({ id });

    res.json({
      data: success,
      message: "Successfully deleted",
    });
  } catch (Err) {
    res.json({
      Error: Err.message,
    });
  }
};
module.exports = {
  postFunction,
  getRequest,
  update,
  deleteReq,
};
