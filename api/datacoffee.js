import data from '../data/datacoffee.json';

export default function handler(req, res) {
  res.status(200).json(data);
}
