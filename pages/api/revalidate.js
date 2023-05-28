export default async function handler(req, res) {
  await res.revalidate("/time");
  return res.json({ revalidated: true });
}
