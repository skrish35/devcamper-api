const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const Bootcamp = require('../models/Bootcamp');

// @desc        Get all bootcamps
// @route       GET
// @access      Public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
        const bootcamps = await Bootcamp.find();
        res
            .status(200)
            .json({ success: true, count: bootcamps.length, data: bootcamps });
});

// @desc        Create bootcamp
// @route       GET
// @access      Public
exports.getBootcamp = asyncHandler(async (req, res, next) => {
        const bootcamp = await Bootcamp.findById(req.params.id);
        if (!bootcamp) {
            return next(new ErrorResponse(`Bootcamp ${req.params.id} not found`, 404));
        }
        res
            .status(200)
            .json({ success: true, data: bootcamp });
});

// @desc        Create new bootcamp
// @route       POST
// @access      Private
exports.createBootcamp = asyncHandler(async (req, res, next) => {
        const bootcamp = await Bootcamp.create(req.body);
        res
            .status(200)
            .json({ success: true, data: bootcamp });
});

// @desc        Update bootcamp
// @route       PUT
// @access      Private
exports.updateBootcamp = asyncHandler(async (req, res, next) => {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!bootcamp) {
            return next(new ErrorResponse(`Bootcamp ${req.params.id} not found`, 404));
        }
        res
            .status(200)
            .json({ success: true, data: bootcamp });
});

// @desc        Delete bootcamp
// @route       DELETE
// @access      Private
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
        if (!bootcamp) {
            return next(new ErrorResponse(`Bootcamp ${req.params.id} not found`, 404));
        }
        res.status(200).json({ success: true, data: {} });
});