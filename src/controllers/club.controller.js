import Club from "../models/Club.js";
import { hasAdminRole } from "../libs/utilities.js";

export const getClubs = async (req, res) => {
  try {
    const { name, creator, state } = req.query;
    const filter = {};

    if (name) {
      filter.name = { $regex: new RegExp(name, "i") };
    }
    if (creator) {
      filter.creator = creator;
    }
    if (state !== undefined) {
      filter.state = state;
    }

    const clubs = await Club.find(filter).populate("creator");
    return res.json(clubs);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getClub = async (req, res) => {
  try {
    const clubId = req.params.id;
    const club = await Club.findOne({ _id: clubId }).populate("creator");

    if (!club) {
      return res.status(404).json({ error: "Club not found" });
    }

    return res.json(club);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createClub = async (req, res) => {
  try {
    const { name, description, icon, front, state } = req.body;
    const newClub = await Club.create({
      name,
      creator: req.userId,
      description,
      icon,
      front,
      state,
    });

    return res.status(201).json(newClub);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateClub = async (req, res) => {
  try {
    const clubId = req.params.id;

    if (!hasAdminRole(req.userId)) {
      const existingClub = await Club.findOne({
        _id: clubId,
        creator: req.userId,
      });

      if (!existingClub) {
        return res.status(403).json({ error: "Permission denied. You are not the creator of this club." });
      }
    }

    const updatedClub = await Club.findByIdAndUpdate(clubId, req.body, {
      new: true,
    }).populate("creator");

    if (!updatedClub) {
      return res.status(404).json({ error: "Club not found" });
    }

    return res.json(updatedClub);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};