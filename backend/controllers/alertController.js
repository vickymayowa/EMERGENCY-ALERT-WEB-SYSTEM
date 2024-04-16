import asyncHandler from "express-async-handler";

// This file is not user to be able to create alert
const createAlert = asyncHandler(async (req, res) => {
  res.send({ message: "Creating User ALert" });
});

const getAlert = asyncHandler(async (req, res) => {
  console.log("Getting alert...");
});

export { createAlert, getAlert };
