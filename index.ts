import { type SchemaTypeDefinition } from "sanity";
import { notice } from "./schema/notice";
import { alumni, alumniBatch } from "./schema/alumni";
import { event } from "./schema/event";
import { team } from "./schema/team";
import { magazine } from "./schema/magazine";
import { journal } from "./schema/journal";
import { hero } from "./schema/hero";
import { generalMembers } from "./schema/generalMembers";
import { subscriber } from "./schema/subscriber";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    notice, 
    alumni, 
    alumniBatch, 
    event, 
    team, 
    magazine, 
    journal, 
    hero, 
    generalMembers, 
    subscriber
  ],
};
