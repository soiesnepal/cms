import type { StructureBuilder } from "sanity/structure";
import {
  Bell,
  Users,
  FolderKanban,
  UserCircle,
  BookOpen,
  Building2,
  CalendarDays,
  CheckCircle2,
  XCircle,
  GraduationCap,
  AlertCircle,
  BadgeAlert,
} from "lucide-react";

export const structure = (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      // Notices
      S.listItem()
        .title("Notices")
        .icon(Bell)
        .child(
          S.list()
            .title("Notices")
            .items([
              S.listItem()
                .title("All Notices")
                .icon(Bell)
                .child(
                  S.documentList()
                    .title("All Notices")
                    .filter('_type == "notice"')
                ),
              S.listItem()
                .title("By Category")
                .icon(BadgeAlert)
                .child(
                  S.list()
                    .title("Notices by Category")
                    .items([
                      S.listItem()
                        .title("Academic")
                        .icon(GraduationCap)
                        .child(
                          S.documentList()
                            .title("Academic Notices")
                            .filter(
                              '_type == "notice" && category == "academic"'
                            )
                        ),
                      S.listItem()
                        .title("Administrative")
                        .icon(Building2)
                        .child(
                          S.documentList()
                            .title("Administrative Notices")
                            .filter(
                              '_type == "notice" && category == "administrative"'
                            )
                        ),
                      S.listItem()
                        .title("Events")
                        .icon(CalendarDays)
                        .child(
                          S.documentList()
                            .title("Event Notices")
                            .filter('_type == "notice" && category == "event"')
                        ),
                      S.listItem()
                        .title("Other")
                        .icon(AlertCircle)
                        .child(
                          S.documentList()
                            .title("Other Notices")
                            .filter('_type == "notice" && category == "other"')
                        ),
                    ])
                ),
              S.listItem()
                .title("By Status")
                .child(
                  S.list()
                    .title("Notices by Status")
                    .items([
                      S.listItem()
                        .title("Active")
                        .icon(CheckCircle2)
                        .child(
                          S.documentList()
                            .title("Active Notices")
                            .filter('_type == "notice" && status == "active"')
                        ),
                      S.listItem()
                        .title("Inactive")
                        .icon(XCircle)
                        .child(
                          S.documentList()
                            .title("Inactive Notices")
                            .filter('_type == "notice" && status == "inactive"')
                        ),
                    ])
                ),
            ])
        ),

      // Alumni
      S.listItem()
        .title("Alumni")
        .icon(Users)
        .child(
          S.list()
            .title("Alumni")
            .items([
              S.listItem()
                .title("All Alumni")
                .icon(Users)
                .child(
                  S.documentList()
                    .title("All Alumni")
                    .filter('_type == "alumni"')
                ),
              S.listItem()
                .title("By Graduation Year")
                .icon(GraduationCap)
                .child(
                  S.documentList()
                    .title("Alumni by Year")
                    .filter('_type == "alumni"')
                ),
            ])
        ),

      // Projects
      S.listItem()
        .title("Projects")
        .icon(FolderKanban)
        .child(S.documentList().title("Projects").filter('_type == "project"')),

      // Team
      S.listItem()
        .title("Team")
        .icon(UserCircle)
        .child(
          S.documentList().title("Team Members").filter('_type == "team"')
        ),

      // Journals
      S.listItem()
        .title("Journals")
        .icon(BookOpen)
        .child(S.documentList().title("Journals").filter('_type == "journal"')),

      // Magazines
      S.listItem()
        .title("Magazines")
        .icon(BookOpen)
        .child(
          S.documentList().title("Magazines").filter('_type == "magazine"')
        ),
    ]);

export default structure;
