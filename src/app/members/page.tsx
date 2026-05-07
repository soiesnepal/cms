import { client } from "@/lib/sanity";
import { generalMembersQuery } from "@/lib/queries";
import MembersClient from "./MembersClient";

export const revalidate = 60;

const hardcodedMembersBatch082 = {
  _id: "batch-082-hardcoded",
  batch: "082",
  members: [
    { name: "Aayush Poudel", rollNumber: 6 },
    { name: "Abhiyan Paneru", rollNumber: 7 },
    { name: "Aayush Poudel", rollNumber: 8 },
    { name: "Aayush Poudel", rollNumber: 11 },
    { name: "Aayush Poudel", rollNumber: 13 },
    { name: "Aayush Poudel", rollNumber: 15 },
    { name: "Aayush Poudel", rollNumber: 16 },
    { name: "Aayush Poudel", rollNumber: 18 },
    { name: "Aayush Poudel", rollNumber: 19 },
    { name: "Aayush Poudel", rollNumber: 21 },
    { name: "Kopila Ghimire", rollNumber: 22 },
    { name: "Krisala Ghimire", rollNumber: 23 },
    { name: "Niranjan pandey", rollNumber: 25 },
    { name: "Pradip Acharya", rollNumber: 28 },
    { name: "Pranish Poudel", rollNumber: 29 },
    { name: "PUJAN REGMI", rollNumber: 30 },
    { name: "Rishu Bhandari", rollNumber: 32 },
    { name: "SAMRIDDHI BISTA", rollNumber: 35 },
    { name: "Sarvagya Lohani", rollNumber: 37 },
    { name: "Subash Rawal", rollNumber: 38 },
    { name: "Suyog Mahat", rollNumber: 41 },
    { name: "Umela Shrestha", rollNumber: 43 },
    { name: "Yunisha deshar", rollNumber: 44 },
  ],
};

async function getMembers() {
  try {
    const data = await client.fetch(generalMembersQuery, {}, { next: { revalidate: 0 }, cache: 'no-store' });
    
    // Process the pasted membersList
    const processedBatches = (data || []).map((batch: any) => {
      let parsedMembers: any[] = [];
      if (batch.membersList) {
        const rawMembers = batch.membersList.split(/[\n,]+/).map((s: string) => s.trim()).filter((s: string) => s.length > 0);
        parsedMembers = rawMembers.map((rm: string) => {
          const parts = rm.split('-');
          const name = parts[0]?.trim() || "Unknown";
          const rollNumber = parseInt(parts[1]?.trim() || "0", 10);
          return { name, rollNumber };
        });
      }
      return {
        _id: batch._id,
        batch: batch.batch,
        members: parsedMembers
      };
    });

    return processedBatches.length ? processedBatches : [hardcodedMembersBatch082];
  } catch {
    return [hardcodedMembersBatch082];
  }
}

export default async function MembersPage() {
  const batches = await getMembers();
  
  // Merge hardcoded members if batch 082 doesn't exist from sanity fetch, 
  // or just directly include them.
  const allBatches = [...batches];
  if (!allBatches.some(b => b.batch === "082")) {
    allBatches.push(hardcodedMembersBatch082);
  }

  // sort by batch string descending (e.g. 082, 081, 080)
  allBatches.sort((a, b) => b.batch.localeCompare(a.batch));

  return <MembersClient batches={allBatches} />;
}
