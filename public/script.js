// const USERNAME = "enghalih";

// async function getProjects() {
//   try {
//     const response = await fetch(
//       `https://api.github.com/users/${USERNAME}/repos?sort=updated`,
//     );
//     const repos = await response.json();

//     // Filter: Hanya ambil repo yang punya topik 'portfolio'
//     // const featuredProjects = repos.filter(
//     //   (repo) => repo.topics && repo.topics.includes("portfolio"),
//     // );

//     renderProjects(repos);
//   } catch (error) {
//     console.error("Gagal mengambil data GitHub:", error);
//   }
// }

// function renderProjects(projects) {
//   const container = document.querySelector(".projects__grid");

//   container.innerHTML = projects
//     .map(
//       (repo) =>
//         `<article class="project-card">
//             <div class="project-card__header">
//               <h3 class="project-card__title">${repo.name.replace(/-/g, " ")}</h3>
//             </div>
//             <div class="project-card__mobile-links">
//               <a href="https://enghalih.github.io/${repo.name}" target="_blank" class="btn-link">Lihat Proyek</a>
//               <a href="${repo.html_url}" target="_blank" class="btn-link">Lihat Kode</a>
//             </div>
//           </article>`,
//       //         `
//       //   <article class="project-card">
//       //       <h3 class="project-card__title">${repo.name.replace(/-/g, " ")}</h3>
//       //       <p class="project-card__description">${repo.description || "Tidak ada deskripsi."}</p>
//       //       <div class="project-card__mobile-links">
//       //           <a href="${repo.html_url}" target="_blank" class="btn-link">GitHub</a>
//       //           ${repo.homepage ? `<a href="${repo.homepage}" target="_blank" class="btn-link">Live Site</a>` : ""}
//       //       </div>
//       //   </article>
//       // `,
//     )
//     .join("");
// }

// getProjects();
