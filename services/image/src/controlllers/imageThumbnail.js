import axios from 'axios';
import sharp from 'sharp';
import fs from 'fs';
import Path from 'path';

const imageThumbail = async (req, res) => {
  try {
    const imageUrl = req.query.url;
    const imageName = imageUrl.substr(imageUrl.lastIndexOf('/') + 1);
    const tempFolder = Path.resolve(__dirname, '../.temp');

    !fs.existsSync(tempFolder) && fs.mkdirSync(tempFolder);

    const filePath = Path.resolve(__dirname, '../.temp', imageName);
    const writer = fs.createWriteStream(filePath);

    const { data } = await axios({
      method: 'GET',
      url: imageUrl,
      responseType: 'stream',
    });
    data.pipe(writer);

    await new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });

    const resizedImage = await sharp(filePath).resize(50).toBuffer();
    fs.writeFileSync(filePath, resizedImage);
    res.status(200).sendFile(filePath);
  } catch (error) {
    res.status(400).json({
      status: 'error',
      error,
    });
  }
};

export default imageThumbail;
