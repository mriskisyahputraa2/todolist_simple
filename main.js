let todoName = document.getElementById("todo-name");
let btnSimpan = document.getElementById("btn-simpan");

// manipulate DOM btnSimpan with adEventListener
btnSimpan.addEventListener("click", function () {
  // jika todoName tidak ada yang dimasukkan
  if (todoName.value == "") {
    // maka tampilkan text ini
    alert("Mohon untuk masukkan To Do List Kamu...");
    // jika tidak
  } else {
    // panggil class list-group simpan di v-todoContainer
    let todoContainer = document.querySelector(".list-group");
    // buat v-todoHTML simpan todoContainer beserta innerHTML didalam v-todoHTML
    let todoHTML = todoContainer.innerHTML;
    console.log(todoHTML);
    todoHTML += `
        <li class="list-group-item d-flex justify-content-between">
            <div>
                <input class="form-check-input me-1" type="checkbox" />
                <span>${todoName.value}</span>  
            </div>
                <button class="bagde border-0 rounded bg-danger btn-hapus text-light">X</button>
        </li>
    `;
    todoContainer.innerHTML = todoHTML; // manipulasi listStyle li untuk dimasukkan ke ul
    todoName.value = ""; // untuk menghilangkan history ketika memasukkan inputtan di todolist
    todoName.focus(); // untuk supaya mengFokuskan kursor kembali ketika inputtan selesai di masukkan

    // memanggil semua class form-check-input menggunakan querySelectorAll dan disimpan dalam v-checkCompleteTodo
    let checkCompleteTodo = document.querySelectorAll(".form-check-input ");

    // perulangan, pada v-checkCompleteTodo
    for (let i = 0; i < checkCompleteTodo.length; i++) {
      // simpan value i pada v-checkCompleteTodo ke dalam v-input
      const input = checkCompleteTodo[i];

      // lakukan DOM addEventListener change dengan function
      // ketika inputkan sudah dimasukkan dan muncul dalam browser
      input.addEventListener("change", function () {
        let valueSpan = input.nextElementSibling; // cari element span menggunakan nextElementSibling yang ada di v-input
        console.log(valueSpan);
        valueSpan.classList.toggle("text-decoration-line-through"); // untuk menambah atau menghapus class text-decoration-line-through ke elemen span.
      });
    }

    // memanggil class button hapus
    let btnHapus = document.querySelectorAll(".btn-hapus");
    for (let x = 0; x < btnHapus.length; x++) {
      const hapus = btnHapus[x];

      // ketikan button hapus di click
      hapus.addEventListener("click", function () {
        // maka hapus parent element ul nya yaitu pembungkus dari li, input dan button
        this.parentElement.remove();
      });
    }
  }
});

/*
# innerHTML =   digunakan untuk mengubah isi elemen HTML. dengan innerHTML bisa mengatur  
                konten HTML tanpa harus dari file HTML sendiri langsung dari JS

# nextElementSibling =  digunakan untuk mendapatkan element saudara berikutnya dari 
                        elemen yang dipilih. hanya element saudara yang bertipe elemen yang dikembalikan. contohnya didalam LI ada element SPAN karna masuk dalam satu todoContainer.

# classList =   merupakan yang menyimpan daftar kelas yan diterapkan pada elemen.         
                Memungkinkan untuk menambahkan, menghapus, dan mengganti kelas pada elemen. contohnya diatas kita menganti element class dan menambahkan style "text-decoration-line-through".

# toggle =  Merupakan metode pada classList yang digunakan untuk menambahkan atau        
            menghapus kelas pada elemen.
            Jika elemen memiliki kelas, maka kelas tersebut akan dihapus.
            Jika elemen tidak memiliki kelas, maka kelas tersebut akan ditambahkan.
*/
