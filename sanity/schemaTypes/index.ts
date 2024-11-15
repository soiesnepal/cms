import { type SchemaTypeDefinition } from "sanity";
import { magazine } from "./schema/magazine";
import { alumni } from "./schema/alumni";
import { journal } from "./schema/journal";
import { notice } from "./schema/notice";
import { event } from "./schema/event";
import { team } from "./schema/team";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [notice, alumni, event, team, journal, magazine],
};
