export async function POST(req) {
  const data = await req.formData();
  if (data.get("file")) {
    console.log("we have file", data.get("file"));
  }
  return Response.json(true);
}
