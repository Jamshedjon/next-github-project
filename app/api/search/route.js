import { NextResponse } from "next/server";
import courses from "../data.json";

export function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");
  const filteredCourses = courses.filter((course) => {
    return course.title.toLowerCase().includes(query.toLowerCase());
  });
  return NextResponse.json(filteredCourses);
}
