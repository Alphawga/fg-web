// import prisma from "@/lib/prisma";

// async function main () {
//   await prisma.location.createMany({
//     data: [
//       {
//         id: "1",
//         name: "Location One",
//         address: "123 Main St",
//         city: "Hometown",
//         state: "HT",
//         country: "Countryland",
//         postal_code: "12345",
//         default: true,
//       },
//       {
//         id: "2",
//         name: "Location Two",
//         address: "456 Elm St",
//         city: "Big City",
//         state: "BC",
//         country: "Countryland",
//         postal_code: "67890",
//         default: false,
//       },
//       {
//         id: "3",
//         name: "Location Three",
//         address: "456 sabo yaba",
//         city: "lagos",
//         state: "oshodi",
//         country: "skyland",
//         postal_code: "!!67890",
//         default: false,
//       },
//       {
//         id: "4",
//         name: "forth Two",
//         address: "111 bariga",
//         city: "small City",
//         state: "SC",
//         country: "\funnyland",
//         postal_code: "607890",
//         default: false,
//       },
//     ],
//   });
// }

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
