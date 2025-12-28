import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

async function POST(request: NextRequest) {
  let client;
  try {
    // Connect to MongoDB
    client = await connectToDatabase();
    if (client === null)
      return NextResponse.json(
        { error: "Failed to connect to MongoDB" },
        { status: 500 }
      );

    const db = client.db("registrationsdb");
    const registrationsCollection = db.collection("registrations");

    //* Parse JSON body
    const data = await request.json();
    //* check if there's place left in the workshop
    const workshopJoiningCount = await registrationsCollection.countDocuments({
      workshopId: data.workshopId,
    });

    if (workshopJoiningCount >= 30) {
      return NextResponse.json(
        { error: "No more places left in the workshop" },
        { status: 400 }
      );
    }

    // Validate required fields
    if (
      !data.fullname ||
      data.fullname.length < 2 ||
      !data.email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || // Basic email regex
      !data.phone ||
      data.phone.length < 10 ||
      !data.univ ||
      data.univ.length < 2 ||
      !data.prvExperience ||
      data.prvExperience.length < 2
    ) {
      return NextResponse.json(
        { error: "Invalid form data. Please check all fields." },
        { status: 400 }
      );
    }

    // Prepare document data
    const docData = {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Insert new document
    const result = await registrationsCollection.insertOne(docData);
    const insertedId = result.insertedId.toString();

    return NextResponse.json(
      {
        success: true,
        id: insertedId,
        message: "Registration created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating registration:", error);
    return NextResponse.json(
      { error: "Failed to create registration" },
      { status: 500 }
    );
  }
}

async function GET(request: NextRequest) {
  let client;
  try {
    // Connect to MongoDB
    client = await connectToDatabase();
    if (client === null)
      return NextResponse.json(
        { error: "Failed to connect to MongoDB" },
        { status: 500 }
      );

    const db = client.db("registrationsdb");
    const registrationsCollection = db.collection("registrations");

    const countDocs = registrationsCollection.aggregate([
      {
        $group: {
          _id: "$workshopId",
          count: { $sum: 1 },
          registrants: { $push: { fullname: "$fullname", email: "$email" } },
        },
      },
      {
        $sort: { count: -1 },
      },
      {
        $project: {
          _id: 0,
          workshopId: "$_id",
          count: 1,
          registrants: 1,
        },
      },
    ]);

    const count = await countDocs.toArray();
    return NextResponse.json(
      {
        success: true,
        data: count,
        message: "Registrations fetched successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching registrations count:", error);
    return NextResponse.json(
      { error: "Failed to fetch registration count" },
      { status: 500 }
    );
  }
}

export { POST, GET };
