import { NextResponse } from "next/server";
import formidable from "formidable";
import fs from "fs/promises";
import path from "path";
import { Readable } from "stream";

// Disable Next.js body parser so formidable can handle the form
export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper to convert the Next.js Request to a Node.js stream and parse the form.
const parseForm = async (req) => {
  const contentType = req.headers.get("content-type") || "";
  if (!contentType.includes("multipart/form-data")) {
    throw new Error("Content-Type must be multipart/form-data");
  }

  // Get the request body as a buffer and convert it into a stream
  const buffer = Buffer.from(await req.arrayBuffer());
  const stream = Readable.from(buffer);

  return new Promise((resolve, reject) => {
    // Configure formidable
    const form = formidable({
      multiples: false,
      uploadDir: path.join(process.cwd(), "data"), // temporary storage
      keepExtensions: true,
    });

    form.parse(stream, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });
};

export async function POST(req) {
  try {
    // Parse the incoming form data
    const { fields, files } = await parseForm(req);

    // Validate required fields
    if (!files.image || !fields.title || !fields.description) {
      return NextResponse.json(
        { error: "Image, title, and description are required" },
        { status: 400 }
      );
    }

    // Choose the image file (if multiple files are allowed adjust accordingly)
    const file = Array.isArray(files.image) ? files.image[0] : files.image;

    // Ensure the public/uploads directory exists
    const uploadsDir = path.join(process.cwd(), "public/uploads");
    await fs.mkdir(uploadsDir, { recursive: true });

    // Determine a new path for the file in public/uploads (using the temporary filename)
    const fileName = path.basename(file.filepath);
    const newPath = path.join(uploadsDir, fileName);

    // Move the file from the temporary folder to public/uploads
    await fs.rename(file.filepath, newPath);

    // Build the image URL (adjust if needed)
    const imageUrl = `/uploads/${fileName}`;

    // Optionally, you can also store title/description in your database here

    return NextResponse.json({ imageUrl }, { status: 200 });
  } catch (error) {
    console.error("Error processing upload:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
