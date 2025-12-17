#import "conf.typ": project
#import "cover.typ": cover_page

#let members_data = (
  (name: "Stefano", nim: "36235830", role: "Vendor_A"),
  (name: "Rizwar Ardian", nim: "36235830", role: "Vendor_B"),
  (name: "Joan Ilham", nim: "36235830", role: "Vendor_C"),
  (name: "Darius Bagaskara", nim: "36235830", role: "Integrator"),
)

#show: doc => project(
  title: "Laporan: UAS Interopabilitas",
  semester: "Ganjil 2024/2025",
  team_number: "03",
  members: members_data,
  doc
)

#cover_page(
  title: "Laporan: UAS Interopabilitas",
  semester: "Ganjil 2024/2025",
  team_number: "03"
)

// Include Bab-bab
#include "chapters/bab1.typ"
#include "chapters/bab2.typ"
#include "chapters/bab3.typ"
#include "chapters/bab4.typ"
#include "chapters/bab5.typ"
#include "chapters/bab6.typ"
#include "chapters/bab7.typ"