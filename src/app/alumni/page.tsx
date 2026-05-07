import { client } from "@/lib/sanity";
import { alumniQuery, alumniBatchQuery } from "@/lib/queries";
import AlumniClient from "./AlumniClient";

export const revalidate = 0; // Changed to 0 so it fetches fresh data immediately

const defaultAlumni = [
  { _id: "1", name: "Abiral Raj Baniya Chhetri", currentPosition: "Revenue Management Officer, Yeti Airlines", Batch: 2062 },
  { _id: "2", name: "Agni Kumar Maleku", currentPosition: "N/A", Batch: 2062 },
  { _id: "3", name: "Anil Kandel", currentPosition: "Currently in Australia", Batch: 2062 },
  { _id: "4", name: "Anisha Shakya", currentPosition: "Currently in USA", Batch: 2062 },
  { _id: "5", name: "Ankit Shrestha", currentPosition: "Lecturer", Batch: 2062 },
  { _id: "6", name: "Ashok Acharya", currentPosition: "Currently in Australia", Batch: 2062 },
  { _id: "7", name: "Basanta Babu Surraf", currentPosition: "N/A", Batch: 2062 },
  { _id: "8", name: "Bishnu Prasad Bhattarai", currentPosition: "N/A", Batch: 2062 },
];

async function getAlumni() {
  try {
    const [individual, batches] = await Promise.all([
      client.fetch(alumniQuery, {}, { next: { revalidate: 0 }, cache: 'no-store' }),
      client.fetch(alumniBatchQuery, {}, { next: { revalidate: 0 }, cache: 'no-store' }),
    ]);

    console.log("Fetched batches:", batches); // Debugging

    // Merge batch-imported alumni into the main list
    const batchAlumni = (batches || []).flatMap(
      (batch: { _id: string; batchYear: number; namesList?: string }) => {
        if (!batch.namesList) return [];
        // Split names by commas or newlines, remove empty/whitespace
        const names = batch.namesList.split(/[\n,]+/).map(n => n.trim()).filter(n => n.length > 0);
        
        return names.map((name, i) => ({
          _id: `${batch._id}-${i}`,
          name: name,
          currentPosition: "",
          description: "",
          Batch: batch.batchYear,
          photoUrl: "",
        }));
      }
    );

    const all = [...(individual || []), ...batchAlumni];
    return all.length ? all : defaultAlumni;
  } catch {
    return defaultAlumni;
  }
}

export default async function AlumniPage() {
  const alumni = await getAlumni();
  return <AlumniClient alumni={alumni} />;
}
