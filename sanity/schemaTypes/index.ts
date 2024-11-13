import { type SchemaTypeDefinition } from "sanity";
import { magazine } from "../schema/magazine";
import { alumni } from "../schema/alumni";
import { journal } from "../schema/journal";
import { notice } from "../schema/notice";
import { project } from "../schema/project";
import { team } from "../schema/team";
import { hero } from "../schema/hero";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [notice, alumni, project, team, journal, magazine, hero],
};
