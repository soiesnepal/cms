import { client } from "@/lib/sanity";
import { generalMembersQuery } from "@/lib/queries";
import MembersClient from "./MembersClient";

export const revalidate = 60;

async function getMembers() {
  try {
    const data = await client.fetch(generalMembersQuery);
    
    if (!data?.length) return [];

    const parsedBatches = data.map((b: any) => {
      if (b.membersList) {
        const membersListStr = b.membersList || "";
        const lines = membersListStr.split(/[\n,]+/).map((l: string) => l.trim()).filter((l: string) => l.length > 0);
        
        const parsedMembers = lines.map((line: string) => {
          const match = line.match(/(.*?)(?:[-:\s]+(\d+))?$/);
          const namePart = match && match[1] ? match[1].trim() : line;
          const cleanName = namePart.replace(/^[-,\s]+|[-,\s]+$/g, '');
          
          return {
            name: cleanName,
            rollNumber: match && match[2] ? parseInt(match[2], 10) : 0,
          };
        });

        return {
          _id: b._id,
          batch: b.batch,
          members: parsedMembers
        };
      }
      return b;
    });

    // sort by batch descending
    parsedBatches.sort((a: any, b: any) => {
      const batchA = String(a.batch);
      const batchB = String(b.batch);
      return batchB.localeCompare(batchA);
    });
    return parsedBatches;
  } catch {
    return [];
  }
}

export default async function MembersPage() {
  const batches = await getMembers();
  return <MembersClient batches={batches} />;
}
