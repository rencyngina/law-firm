// pages/api/compress-image.js
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

export default async function handler(req, res) {
  const imageName = 'familylaw .jpg'; // Specify the name of the image you want to compress
  const imagePath = path.join(process.cwd(), 'public', 'images', imageName);

  // Specify the output path for the compressed image
  const compressedPath = path.join(process.cwd(), 'public', 'images', 'compressed', imageName);

  try {
    console.log(`Starting compression for: ${imageName}`);
    
    const metadata = await sharp(imagePath).metadata();
    console.log(`Original dimensions: ${metadata.width}x${metadata.height}`);

    await sharp(imagePath)
      .resize({ width: 800 }) // Set desired dimensions
      .toFile(compressedPath);

    console.log(`Image compressed successfully: ${imageName}`);
  } catch (error) {
    console.error(`Image compression failed for ${imageName}:`, error);
  }

  res.status(200).json({ message: 'Image compression complete' });
}

