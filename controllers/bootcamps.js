const Bootcamp = require('../models/Bootcamp');

// @desc        Get all bootcamps
// @route       GET
// @access      Public
exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find();
        res
            .status(200)
            .json({ success: true, count: bootcamps.length, data: bootcamps });
    } catch (error) {
        res
            .status(500)
            .json({ success: false, error });
    }
};

// @desc        Create bootcamp
// @route       GET
// @access      Public
exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);
        if (!bootcamp) {
            return res.status(400).json({ success: false, error });
        }
        res
            .status(200)
            .json({ success: true, data: bootcamp });
    } catch (error) {
        res
            .status(400)
            .json({ success: false, error });
    }
};

// @desc        Create new bootcamp
// @route       POST
// @access      Private
exports.createBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body);
        res
            .status(200)
            .json({ success: true, data: bootcamp });
    } catch (error) {
        res
            .status(400)
            .json({ success: false, error });
    }
};

// @desc        Update bootcamp
// @route       PUT
// @access      Private
exports.updateBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!bootcamp) {
            return res
                .status(400)
                .json({ success: false, error });
        }
        res
            .status(200)
            .json({ success: true, data: bootcamp });
    } catch (error) {
        res.status(400).json({ success: false, error });
    }
};

// @desc        Delete bootcamp
// @route       DELETE
// @access      Private
exports.deleteBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
        if (!bootcamp) {
            return res.status(400).json({ success: false, error });
        }
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(400).json({ success: false, error });
    }
};