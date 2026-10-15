export function pasangPendengar(state, render) {
  const barisFilter = document.querySelector("#filter");

  if (barisFilter) {
    barisFilter.addEventListener("click", (event) => {
      const tombol = event.target.closest("button");

      if (!tombol || !barisFilter.contains(tombol)) return;

      state.kategoriAktif = tombol.dataset.kategori;
      render(state);
    });
  }

  const form = document.querySelector("#bagian-2 form");

  if (!form) return;

  const namaGame = document.querySelector("#nama-game");
  const tahunRilis = document.querySelector("#tahun-rilis");
  const tanggalMain = document.querySelector("#tanggal-main");
  const tombolSimpan = form.querySelector(
    'button[type="submit"]'
  );

  function periksaForm() {
    const tahun = Number(tahunRilis.value);

    const valid =
      namaGame.value.trim() !== "" &&
      tahunRilis.value.trim() !== "" &&
      tahun >= 2000 &&
      tahun <= 2030 &&
      tanggalMain.value.trim() !== "";

    namaGame.setAttribute(
      "aria-invalid",
      String(namaGame.value.trim() === "")
    );

    tahunRilis.setAttribute(
      "aria-invalid",
      String(
        tahunRilis.value.trim() === "" ||
        tahun < 2000 ||
        tahun > 2030
      )
    );

    tanggalMain.setAttribute(
      "aria-invalid",
      String(tanggalMain.value.trim() === "")
    );

    tombolSimpan.disabled = !valid;
    return valid;
  }

  [namaGame, tahunRilis, tanggalMain].forEach((input) => {
    input.addEventListener("input", periksaForm);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!periksaForm()) {
      form.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }

    console.log("Form valid dan siap disimpan.");
  });

  periksaForm();
}
